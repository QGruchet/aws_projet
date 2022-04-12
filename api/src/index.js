const express = require('express');
const cors = require('cors'); // Cross-Origin Resource Sharing
const pgp = require('pg-promise')();

// Application configuration
const app = express();
app.use(cors());
app.use(express.json());

// Database configuration
const db = pgp({
  host: 'db',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  max: 32 // max size of the connection pool
});

// Routes configuration
app.get('/', (req, res) => {
  res.send(`Welcome to ${process.env.npm_package_name}!`)
});

// Start listening to requests
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
