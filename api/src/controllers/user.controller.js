const express = require('express');
const router = express.Router();

// Get user profile
router.get('profile:id', function(req, res) {
  const id = req.params.id;
  console.log(`get profile: ${id}`);
  return { id: 0, name: "Alice" };
});
