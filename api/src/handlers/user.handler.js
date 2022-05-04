module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`[/user] - User ${socket.id} connected`);
    socket.on('disconnect', () => {
      console.log(`[/user] - User ${socket.id} disconnected`);
    });
  });
};
