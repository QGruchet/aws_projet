'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/send-json', (req, res) => {
  res.send(JSON.stringify({ id: 24535, name: 'Patrick' }));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
