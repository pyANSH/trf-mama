const socketio = require('socket.io');

let io;

function init(server) {
  io = socketio(server);

  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
}

function getIo() {
  if (!io) {
    throw new Error('Socket.io not initialized');
  }

  return io;
}

module.exports = {
  init,
  getIo,
};
