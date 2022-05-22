const bcrypt = require('bcryptjs');

/**
 * Hash a string using bcryptjs.
 * @param {string} The content to hash.
 * @returns The hashed content.
 */
function bcrypt_func(content) {
  
  let hash = bcrypt.hashSync(content, bcrypt.genSaltSync(12));
  return hash;
}

module.exports = { bcrypt_func };