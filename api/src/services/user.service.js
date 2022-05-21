const User = require('../models/user.model');
const crypto = require('../utils/crypto.util');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

class UserService {
  constructor() { }

  /**
   * Try to authenticate a user.
   * @param {string} login The username or email address of the user.
   * @param {string} password The password of the user.
   * @returns The user or undefined if not found.
   */
  authenticate(login, password) {
    const user = User.findOne({
      where: {
        $or: [
          {
            username:
            {
              $eq: login
            }
          },
          {
            email:
            {
              $eq: login
            }
          }
        ]
      }
    });
    if (user == undefined) return undefined;
    let compare = bcrypt.compareSync(password, user.password);
    if (compare){
      return user; 
    }
    return undefined;
  }

  /**
   * Creates a new user.
   * @param {string} username
   * @param {string} email
   * @param {string} password
   */
  create(username, email, password) {
    const hashedPassword = crypto.bcrypt_func(password);
    const user = {
      username: username,
      email: email,
      password: hashedPassword,
    }
    return User.create(user)
  }

  /**
  * Finds all users.
  * @returns The list of users.
  */
  findAll() {
    return User.findAll();
  }

  /**
   * Finds a user by id.
   * @param {number} id
   * @returns The user or undefined if not found.
   */
  findById(id) {
    return findByPk(id);
  }

  /**
   * Finds a user by username.
   * @param {string} username
   * @returns The user or undefined if not found.
   */
  findByUsername(username) {
    return User.findOne({ where: { username: username } })
  }

  /**
   * Finds a user by email.
   * @param {string} email
   * @returns The user or undefined if not found.
   */
  findByEmail(email) {
    return User.findOne({ where: { email: email } })
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

module.exports = new UserService();