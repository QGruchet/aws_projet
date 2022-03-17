'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/test', (req, res) => {
  res.send('plop');
});

app.get('users/profile', (req, res) => {
  res.send('profile');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
