const express = require('express');
const cors = require('cors');

// Application configuration
const app = express();
app.use(cors());
app.use(express.json());

// Routes configuration
app.get('/', (req, res) => {
  res.send('Welcome to lets-drawmadere-api!')
});

// Start listening to requests
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
