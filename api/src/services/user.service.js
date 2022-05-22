const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');
const crypto = require('../utils/crypto.util');
const User = require('../models/user.model');

class UserService {
  /**
   * Try to authenticate a user.
   * @param {string} login The username or email address of the user.
   * @param {string} password The password of the user.
   * @returns The user or undefined if not found.
   */
  async authenticate(login, password) {
    return User.findOne({
      where: { [Op.or]: [{ username: login }, { email: login }] }
    }).then(u => {
      const user = u.dataValues;
      return bcrypt.compareSync(password, user.password) ? user : undefined;
    }).catch((_err) => { return undefined; });
  }

  /**
   * Creates a new user.
   * @param {string} username
   * @param {string} email
   * @param {string} password
   * @returns The created user or undefined on error.
   */
  async create(username, email, password) {
    const hashedPassword = crypto.bcrypt_func(password);
    const user = {
      username: username,
      email: email,
      password: hashedPassword,
    }
    return await User.create(user)
      .then(u => { return u.dataValues; })
      .catch((_err) => { return undefined; });
  }

  /**
  * Finds all users.
  * @returns The list of users.
  */
  async findAll() {
    return User.findAll()
      .then(u => { return u.dataValues; })
      .catch((_err) => { return undefined; });
  }

  /**
   * Finds a user by id.
   * @param {number} id
   * @returns The user or undefined if not found.
   */
   async findById(id) {
    return findByPk(id)
      .then(u => { return u.dataValues; })
      .catch((_err) => { return undefined; });
  }

  /**
   * Finds a user by username.
   * @param {string} username
   * @returns The user or undefined if not found.
   */
   async findByUsername(username) {
    return User.findOne({ where: { username: username } })
      .then(u => { return u.dataValues; })
      .catch((_err) => { return undefined; });
  }

  /**
   * Finds a user by email.
   * @param {string} email
   * @returns The user or undefined if not found.
   */
  async findByEmail(email) {
    return User.findOne({ where: { email: email } })
      .then(u => { return u.dataValues; })
      .catch((_err) => { return undefined; });
  }

  /**
   * Generates a new access token for the user.
   * @param {User} user The user.
   * @returns The new access token.
   */
  generateAccessToken(user) {
    return jwt.sign({ id: user.id }, process.env.JWT_ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN });
  }


  /**
   * Change an user's username
   * @param {User} user Current user info
   * @param {User.name} newname The user's selected new name
   */
  async changeName(user, newname){

    console.log(user.name); 
    user.name = newname;
    await user.save();
    
  }

  /**
   * Change an user's password
   * @param {User} user Current user info
   * @param {User.password} newpswrd The user's new password
   */
  async changePassword(user, newpswrd){

    console.log(user.password);
    user.password = newpswrd;
    await user.save();

  }
}

module.exports = new UserService();
