const express = require('express');
const path = require('path');

// Application configuration
const app = express();
const port = process.env.PORT;
app.use(express.static(path.join(__dirname, 'public')));

// Routes configuration
var indexRouter = require('./routes/index');
app.use('/', indexRouter);
var gameRouter = require('./routes/game');
app.use('/game', gameRouter);

// Start listening to requests
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
