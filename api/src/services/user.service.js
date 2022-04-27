const User = require('../models/user.model');
const crypto = require('../utils/crypto.util')

class UserService {
  constructor() {
    this.users = [];
  }

  /**
   * Try to authenticate a user.
   * @param {string} email_or_login The email or username of the user.
   * @param {string} password The password of the user.
   * @returns The user or undefined if not found.
   */
  authenticate(email_or_login, password) {
    const hashedPassword = crypto.sha256(password);
    return this.users.find(u => (u.email === email_or_login || u.username === email_or_login)
      && u.password === hashedPassword)
  }

  /**
   * Creates a new user.
   * @param {string} username
   * @param {string} email
   * @param {string} password
   */
  create(username, email, password) {
    const user = new User(username, email, password);
    this.users.push(user);
    return user;
  }

  /**
   * Finds all users.
   * @returns The list of users.
   */
  findAll() {
    return this.users;
  }

  /**
   * Finds a user by email.
   * @param {string} email
   * @returns The user or undefined if not found.
   */
  findByEmail(email) {
    return this.users.find(u => u.email === email);
  }

  /**
   * Finds a user by id.
   * @param {number} id
   * @returns The user or undefined if not found.
   */
  findById(id) {
    return this.users.find(u => u.id === id);
  }

  /**
   * Finds a user by username.
   * @param {string} username
   * @returns The user or undefined if not found.
   */
  findByUsername(username) {
    return this.users.find(u => u.username === username);
  }
}

module.exports = new UserService();
