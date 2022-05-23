const User = require('../models/user.model');
const Random = require("../utils/random.utils");

class GameService {
  constructor() {
    this.round = 1;
    this.maxRounds = 10;
    this.players = new Map();
    this.possibleDrawers = new Set();
  }

  /**
   * Joins the game.
   * @param {User} user The user to join.
   * @param {string} lobbyId The lobby's id.
   */
  join(user) {
    const player = { username: user.name, score: 0 };
    this.players.set(user.id, player);
    this.possibleDrawers.add(user.id);
    return player;
  }

  leave(user) {
    this.players.delete(user.id);
  }
}

module.exports = new GameService();
