var users = [];
var nextUserId = 0;

/**
 * Creates a new user.
 * @param {string} username
 * @param {string} email
 * @param {string} password
 */
exports.create = function (username, email, password) {
  var user = {
    id: ++nextUserId,
    username: username,
    email: email,
    password: password
  };
  users.push(user);
  return user;
}

/**
 * Finds a user by email.
 * @param {string} email
 * @returns The user or undefined if not found.
 */
exports.findByEmail = function (email) {
  return users.find(u => u.email === email);
}

/**
 * Finds a user by id.
 * @param {number} id
 * @returns The user or undefined if not found.
 */
exports.findById = function (id) {
  return users.find(u => u.id === id);
}

/**
 * Finds a user by username.
 * @param {string} username
 * @returns The user or undefined if not found.
 */
exports.findByUsername = function (username) {
  return users.find(u => u.username === username);
}
