const crypto = require('crypto');

/**
 * Hash a string using SHA-256.
 * @param {string} The content to hash.
 * @returns The hashed content.
 */
function sha256(content) {
  return crypto.createHash('sha256').update(content).digest('hex');
}

module.exports = { sha256 };
