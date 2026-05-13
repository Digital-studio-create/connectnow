const express = require('express');
const http = require('http');
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

// ── ICE Servers (STUN + Multiple TURN) ───────────────────
const ICE_SERVERS = [
  // Google STUN
  { urls: 'stun:stun.l.google.com:19302' },
  { urls: 'stun:stun1.l.google.com:19302' },
  { urls: 'stun:stun2.l.google.com:19302' },
  { urls: 'stun:stun3.l.google.com:19302' },
  { urls: 'stun:stun4.l.google.com:19302' },

  // Metered.ca FREE TURN (most reliable)
  {
    urls: [
      'turn:openrelay.metered.ca:80',
      'turn:openrelay.metered.ca:443',
      'turns:openrelay.metered.ca:443'
    ],
    username: 'openrelayproject',
    credential: 'openrelayproject'
  },
  {
    urls: 'turn:openrelay.metered.ca:443?transport=tcp',
    username: 'openrelayproject',
    credential: 'openrelayproject'
  },

  // Xirsys FREE TURN (backup)
  {
    urls: [
      'turn:relay.metered.ca:80',
      'turn:relay.metered.ca:443',
    ],
    username: 'openrelayproject',
    credential: 'openrelayproject'
  },

  // Additional free TURN servers
  {
    urls: 'turn:numb.viagenie.ca',
    credential: 'muazkh',
    username: 'webrtc@live.com'
  },
  {
    urls: 'turn:turn.bistri.com:80',
    username: 'homeo',
    credential: 'homeo'
  }
];

app.get('/api/ice-servers', (_, res) => {
  res.json({ iceServers: ICE_SERVERS });
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
  const queue = seeker.isPremium && seeker.genderFilter !== 'any'
    ? waitingUsers[seeker.genderFilter] || waitingUsers.any
    : waitingUsers.any;

  if (seeker.isPremium && seeker.countryFilter && seeker.countryFilter !== 'any') {
    const idx = queue.findIndex(u => u.socketId !== seeker.socketId && u.country === seeker.countryFilter);
    if (idx !== -1) return { queue, idx };
  }

  const idx = queue.findIndex(u => u.socketId !== seeker.socketId);
  return idx !== -1 ? { queue, idx } : null;
}

// ── Socket events ─────────────────────────────────────────
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
    socket.emit('registered', { socketId: socket.id });
  });

  socket.on('find_stranger', (prefs) => {
    const meta = userMeta.get(socket.id);
    if (!meta) return;
    Object.assign(meta, prefs);
    meta.socketId = socket.id;
    removeFromWaiting(socket.id);

    const queue = meta.isPremium && meta.genderFilter !== 'any'
      ? waitingUsers[meta.genderFilter] || waitingUsers.any
      : waitingUsers.any;

    const match = findMatch(meta);

    if (match) {
      const { queue: q, idx } = match;
      const stranger = q.splice(idx, 1)[0];
      removeFromWaiting(stranger.socketId);

      const roomId = Math.random().toString(36).substring(2, 10);
      activeRooms.set(roomId, { users: [socket.id, stranger.socketId] });
      socket.join(roomId);
      io.sockets.sockets.get(stranger.socketId)?.join(roomId);

      const strangerMeta = userMeta.get(stranger.socketId) || {};

      io.to(socket.id).emit('matched', {
        roomId, isInitiator: true,
        stranger: { name: strangerMeta.name, country: strangerMeta.country, gender: strangerMeta.gender }
      });
      io.to(stranger.socketId).emit('matched', {
        roomId, isInitiator: false,
        stranger: { name: meta.name, country: meta.country, gender: meta.gender }
      });
    } else {
      queue.push(meta);
      socket.emit('waiting', { position: queue.length });
    }
  });

  socket.on('cancel_find', () => removeFromWaiting(socket.id));

  socket.on('offer',         (d) => socket.to(d.roomId).emit('offer', d));
  socket.on('answer',        (d) => socket.to(d.roomId).emit('answer', d));
  socket.on('ice_candidate', (d) => socket.to(d.roomId).emit('ice_candidate', d));
  socket.on('message',       (d) => socket.to(d.roomId).emit('message', { text: d.text, from: socket.id }));

  socket.on('next',       () => handleLeave(socket));
  socket.on('disconnect', () => handleLeave(socket));

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
server.listen(PORT, () => console.log(`✅ ConnectNow v4 on port ${PORT}`));
