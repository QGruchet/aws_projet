/**
 * Generates a random string in hexadecimal format.
 * @param {number} length The length of the string.
 * @returns {string} The random string.
 */
function generateHexString(length) {
  return [...Array(length)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
}

module.exports = { generateHexString };
