const express = require('express');
const router = express.Router();

// Home page
router.get('/', function(req, res, next) {
  res.render('index', { title: "Let's Drawmadaire" });
});

module.exports = router;
