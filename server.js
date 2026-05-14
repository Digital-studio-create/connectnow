const express = require('express');
const http = require('http');
const https = require('https');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] },
  pingTimeout: 60000,
  pingInterval: 25000
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const METERED_DOMAIN = process.env.METERED_DOMAIN || 'bilalchat.metered.live';
const METERED_KEY    = process.env.METERED_API_KEY || 'oiNwgWvahlxp7hfAI55FKRW1SJXlUfkkLmgQ6A49LeuLn58-';

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch(e) { reject(new Error('Parse error: ' + data)); }
      });
    }).on('error', reject);
  });
}

// Working TURN servers — hardcoded as primary
function getICEServers() {
  return [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' },
    { urls: 'stun:stun2.l.google.com:19302' },
    { urls: 'stun:stun3.l.google.com:19302' },
    { urls: 'stun:stun4.l.google.com:19302' },
    {
      urls: 'turn:openrelay.metered.ca:80',
      username: 'openrelayproject',
      credential: 'openrelayproject'
    },
    {
      urls: 'turn:openrelay.metered.ca:443',
      username: 'openrelayproject',
      credential: 'openrelayproject'
    },
    {
      urls: 'turn:openrelay.metered.ca:443?transport=tcp',
      username: 'openrelayproject',
      credential: 'openrelayproject'
    },
    {
      urls: 'turns:openrelay.metered.ca:443',
      username: 'openrelayproject',
      credential: 'openrelayproject'
    },
    {
      urls: 'turn:relay.metered.ca:80',
      username: 'openrelayproject',
      credential: 'openrelayproject'
    },
    {
      urls: 'turn:relay.metered.ca:443',
      username: 'openrelayproject',
      credential: 'openrelayproject'
    },
    {
      urls: 'turn:relay.metered.ca:443?transport=tcp',
      username: 'openrelayproject',
      credential: 'openrelayproject'
    }
  ];
}

app.get('/api/ice-servers', async (req, res) => {
  // Try Metered API first
  try {
    const url = `https://${METERED_DOMAIN}/api/v1/turn/credentials?apiKey=${METERED_KEY}`;
    const result = await httpsGet(url);
    if (Array.isArray(result) && result.length > 0) {
      console.log('Metered TURN servers:', result.length);
      res.json({ iceServers: result });
      return;
    }
  } catch(e) {
    console.log('Metered failed, using openrelay:', e.message);
  }
  // Use openrelay fallback
  const servers = getICEServers();
  console.log('Using openrelay TURN servers:', servers.length);
  res.json({ iceServers: servers });
});

// ── In-memory store ───────────────────────────────────────
const waitingUsers = { any: [], male: [], female: [] };
const activeRooms  = new Map();
const userMeta     = new Map();

function removeFromWaiting(socketId) {
  for (const key of Object.keys(waitingUsers)) {
    waitingUsers[key] = waitingUsers[key].filter(u => u.socketId !== socketId);
  }
}

function findMatch(seeker) {
  const queue = waitingUsers.any;
  const idx = queue.findIndex(u => u.socketId !== seeker.socketId);
  return idx !== -1 ? { queue, idx } : null;
}

io.on('connection', (socket) => {
  socket.on('register', (data) => {
    userMeta.set(socket.id, {
      socketId: socket.id,
      name: data.name || 'Anonymous',
      gender: data.gender || 'any',
      country: data.country || 'any',
      isPremium: data.isPremium || false,
      genderFilter: data.genderFilter || 'any',
      countryFilter: data.countryFilter || 'any',
      mode: data.mode || 'video',
    });
  });

  socket.on('find_stranger', (prefs) => {
    const meta = userMeta.get(socket.id);
    if (!meta) return;
    Object.assign(meta, prefs);
    meta.socketId = socket.id;
    removeFromWaiting(socket.id);

    const match = findMatch(meta);

    if (match) {
      const { queue: q, idx } = match;
      const stranger = q.splice(idx, 1)[0];
      removeFromWaiting(stranger.socketId);

      const roomId = Math.random().toString(36).substring(2, 10);
      activeRooms.set(roomId, { users: [socket.id, stranger.socketId] });
      socket.join(roomId);
      io.sockets.sockets.get(stranger.socketId)?.join(roomId);

      const sm = userMeta.get(stranger.socketId) || {};
      io.to(socket.id).emit('matched', {
        roomId, isInitiator: true,
        stranger: { name: sm.name, country: sm.country, gender: sm.gender }
      });
      io.to(stranger.socketId).emit('matched', {
        roomId, isInitiator: false,
        stranger: { name: meta.name, country: meta.country, gender: meta.gender }
      });
    } else {
      waitingUsers.any.push(meta);
      socket.emit('waiting', { position: waitingUsers.any.length });
    }
  });

  socket.on('cancel_find', () => removeFromWaiting(socket.id));
  socket.on('offer',         (d) => socket.to(d.roomId).emit('offer', d));
  socket.on('answer',        (d) => socket.to(d.roomId).emit('answer', d));
  socket.on('ice_candidate', (d) => socket.to(d.roomId).emit('ice_candidate', d));
  socket.on('message',       (d) => socket.to(d.roomId).emit('message', { text: d.text, from: socket.id }));
  socket.on('next',          () => handleLeave(socket));
  socket.on('disconnect',    () => handleLeave(socket));

  function handleLeave(sock) {
    removeFromWaiting(sock.id);
    for (const [roomId, room] of activeRooms.entries()) {
      if (room.users.includes(sock.id)) {
        const partner = room.users.find(id => id !== sock.id);
        if (partner) io.to(partner).emit('stranger_left');
        activeRooms.delete(roomId);
        break;
      }
    }
    userMeta.delete(sock.id);
  }
});

app.get('/api/stats', (_, res) => {
  const waiting = Object.values(waitingUsers).reduce((a, q) => a + q.length, 0);
  res.json({ online: userMeta.size, inChats: activeRooms.size * 2, waiting });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log('ConnectNow running on port ' + PORT));
