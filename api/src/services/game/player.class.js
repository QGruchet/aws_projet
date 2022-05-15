const User = require('../../models/user.model');

class Player {
  /**
   * Creates a new player.
   * @param {User} user The user associated with the player.
   */
  constructor(user) {
    this.id = user.id;
    this.username = user.username;
    this.score = 0;
  }
}

module.exports = Player;
