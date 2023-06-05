const socketio = require('socket.io');

let io;

function initializeSocket(server) {
  io = socketio(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
  });

  io.on('connection', (socket) => {
    console.log('A user connected. : ', socket.id);

    socket.on('disconnect', () => {
      console.log('User disconnected. :', socket.id);
    });

    socket.on('join', (data) => {
      console.log(`${data.username} joined the discussion`);
      socket.join(data.room);
      socket.broadcast
        .to(data.room)
        .emit('user joined', `${data.username} joined the discussion`);
    });

    socket.on('chat', (payload) => {
      console.log('chat payload : ', payload);
      io.emit('chat', payload);
    });

    socket;
  });
}

function getSocket() {
  if (!io) {
    throw new Error('Socket.io not initialized.');
  }

  return io;
}

module.exports = {
  initializeSocket,
  getSocket,
};
