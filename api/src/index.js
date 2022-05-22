const express = require('express');
const cors = require('cors'); // Cross-Origin Resource Sharing
const fs = require('fs');
const User = require('./models/user.model')
const Room = require('./models/room.model')
const Word = require('./models/word.model')
const Player = require('./models/player.model')

/**
 * Initilizes socket-io handlers.
 * @param {SocketIO.Server} io The socket-io server.
 */
function initHandlers(io) {
  const handlersDirectory = 'handlers';
  const handlerFileExtension = '.handler.js';
  console.log('> Initializing handlers...');
  fs.readdirSync(__dirname + '/' + handlersDirectory).forEach(file => {
    if (file.endsWith(handlerFileExtension)) {
      handlerName = file.substring(0, file.indexOf('.'));
      console.log(`Loading ${handlerName} handler...`);
      require(`./${handlersDirectory}/${file}`)(io.of(handlerName));
    }
  });
}

/**
 * Initializes all routes.
 * @param {Express.Application} app The express application.
 */
function initRoutes(app) {
  const routesDirectory = 'routes';
  const routeFileExtension = '.route.js';
  console.log('> Initializing routes...');
  fs.readdirSync(__dirname + '/' + routesDirectory).forEach(file => {
    if (file.endsWith(routeFileExtension)) {
      routeName = file.substring(0, file.indexOf('.'));
      console.log(`Loading ${routeName} route...`);
      app.use(`/${routeName}`, require(`./${routesDirectory}/${file}`));
    }
  });
}

// Application configuration
const app = express();
const port = process.env.PORT;
const server = require('http').createServer(app)
const io = require('socket.io')(server);

app.use(cors({ credentials: true, origin: 'http://localhost' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
initRoutes(app);
initHandlers(io);

// Database configuration
async function createTables() {
  await User.sync();
  await Room.sync();
  await Word.sync();
  await Player.sync();
}
createTables()

// Start listening to requests
server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
