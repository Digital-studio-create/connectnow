const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] }
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// ── In-memory store ──────────────────────────────────────────
const waitingUsers = {
  any:    [],   // free random
  male:   [],   // premium gender filter – wants males
  female: [],   // premium gender filter – wants females
};

const activeRooms  = new Map(); // roomId → { users:[sid,sid] }
const userMeta     = new Map(); // socketId → { name, gender, country, isPremium, mode }

// ── Helpers ─────────────────────────────────────────────────
function generateRoomId() {
  return Math.random().toString(36).substring(2, 10);
}

function removeFromWaiting(socketId) {
  for (const key of Object.keys(waitingUsers)) {
    waitingUsers[key] = waitingUsers[key].filter(u => u.socketId !== socketId);
  }
}

function findMatch(seeker) {
  const queue = seeker.isPremium && seeker.genderFilter !== 'any'
    ? waitingUsers[seeker.genderFilter]
    : waitingUsers.any;

  // country preference first (premium)
  if (seeker.isPremium && seeker.countryFilter) {
    const idx = queue.findIndex(
      u => u.socketId !== seeker.socketId && u.country === seeker.countryFilter
    );
    if (idx !== -1) return { queue, idx };
  }

  // fallback: any from same queue
  const idx = queue.findIndex(u => u.socketId !== seeker.socketId);
  return idx !== -1 ? { queue, idx } : null;
}

// ── Socket events ────────────────────────────────────────────
io.on('connection', (socket) => {

  // ── Register user ────────────────────────────────────────
  socket.on('register', (data) => {
    userMeta.set(socket.id, {
      socketId:      socket.id,
      name:          data.name    || 'Anonymous',
      gender:        data.gender  || 'any',
      country:       data.country || 'any',
      isPremium:     data.isPremium || false,
      genderFilter:  data.genderFilter  || 'any',
      countryFilter: data.countryFilter || 'any',
      mode:          data.mode || 'video',
    });
    socket.emit('registered', { socketId: socket.id });
  });

  // ── Find stranger ────────────────────────────────────────
  socket.on('find_stranger', (prefs) => {
    const meta = userMeta.get(socket.id);
    if (!meta) return;

    // update prefs
    Object.assign(meta, prefs);
    meta.socketId = socket.id;

    removeFromWaiting(socket.id);

    // choose queue
    const queue = meta.isPremium && meta.genderFilter !== 'any'
      ? waitingUsers[meta.genderFilter]
      : waitingUsers.any;

    const match = findMatch(meta);

    if (match) {
      const { queue: q, idx } = match;
      const stranger = q.splice(idx, 1)[0];
      removeFromWaiting(stranger.socketId);

      const roomId = generateRoomId();
      activeRooms.set(roomId, { users: [socket.id, stranger.socketId] });

      socket.join(roomId);
      io.sockets.sockets.get(stranger.socketId)?.join(roomId);

      const strangerMeta = userMeta.get(stranger.socketId) || {};

      io.to(socket.id).emit('matched', {
        roomId,
        isInitiator: true,
        stranger: { name: strangerMeta.name, country: strangerMeta.country, gender: strangerMeta.gender }
      });
      io.to(stranger.socketId).emit('matched', {
        roomId,
        isInitiator: false,
        stranger: { name: meta.name, country: meta.country, gender: meta.gender }
      });
    } else {
      queue.push(meta);
      socket.emit('waiting', { position: queue.length });
    }
  });

  // ── WebRTC signaling ────────────────────────────────────
  socket.on('offer',     (d) => socket.to(d.roomId).emit('offer',     d));
  socket.on('answer',    (d) => socket.to(d.roomId).emit('answer',    d));
  socket.on('ice_candidate', (d) => socket.to(d.roomId).emit('ice_candidate', d));

  // ── Text message ────────────────────────────────────────
  socket.on('message', (d) => {
    socket.to(d.roomId).emit('message', { text: d.text, from: socket.id });
  });

  // ── Next / disconnect ───────────────────────────────────
  socket.on('next', () => handleLeave(socket));
  socket.on('disconnect', () => handleLeave(socket));

  function handleLeave(sock) {
    removeFromWaiting(sock.id);

    // notify room partner
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

// ── Stats endpoint ───────────────────────────────────────────
app.get('/api/stats', (_, res) => {
  const waiting = Object.values(waitingUsers).reduce((a, q) => a + q.length, 0);
  res.json({
    online:  userMeta.size,
    inChats: activeRooms.size * 2,
    waiting,
  });
});

// ── Start ────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`✅ ConnectNow server running on port ${PORT}`));
