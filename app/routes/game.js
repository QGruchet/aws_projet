const express = require('express');
const app = express()
const path = require('path');
const router = express.Router();

// Home page
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/html/game.html'));
});


module.exports = router;
