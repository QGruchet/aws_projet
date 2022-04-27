const crypto = require('../utils/crypto.util')
const jwt = require('jsonwebtoken');

class User {
  static #nextUserId = 1;

  constructor(username, email, password) {
    this.id = User.#nextUserId++;
    this.username = username;
    this.email = email;
    this.password = crypto.sha256(password);
  }

  /**
   * Generates a new access token for the user.
   * @returns The new access token.
   */
   generateAccessToken() {
    return jwt.sign({ ...this }, process.env.JWT_ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN });
  }
}

module.exports = User;
