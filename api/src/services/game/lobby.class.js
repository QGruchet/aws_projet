const LobbySettings = require('./lobby-settings.class');
const Player = require('./player.class');

class Lobby {
  id;
  ownerId;
  players;
  settings;

  /**
   * Creates a new empty lobby.
   * @param {string} id The identifier of the lobby.
   * @param {LobbySettings} settings The settings of the lobby.
   */
  constructor(id, settings) {
    this.id = id;
    this.ownerId = undefined;
    this.players = new Map();
    this.settings = settings;
  }

  /**
   * Gets the owner of the lobby.
   * @returns {Player} The owner of the lobby.
   */
  get owner() {
    return this.players.get(this.ownerId);
  }

  /**
   * Finds a player by its id.
   * @param {number} playerId The player's id.
   * @returns {Player} The player or undefined if it doesn't exist.
  */
  findBy(playerId) {
    return this.players.get(playerId);
  }

  /**
   * Gets the players in the lobby.
   * @returns {Player[]} The players in the lobby.
   */
  findAll() {
    return Array.from(this.#players.values());
  }

  /**
   * Adds a player to the lobby.
   * @param {User} user The user to join.
   * @returns {boolean} False if the player is already in the lobby, true otherwise.
   */
  join(user) {
    if (this.players.has(user.id))
      return false;
    if (this.isEmpty())
      this.#ownerId = user.id;
    this.#players.set(user.id, new Player(user));
    return true;
  }

  /**
   * Checks if the lobby is empty.
   * @returns {boolean} True if the lobby is empty, false otherwise.
   */
  isEmpty() {
    return !this.#players.size;
  }

  /**
   * Removes a player from the lobby.
   * @param {number} playerId The player's id.
   * @returns {boolean} False if the player is not in the lobby, true otherwise.
  */
  leave(playerId) {
    if (playerId === this.ownerId)
      this.#ownerId = undefined;
    return this.#players.delete(playerId);
  }

  /**
   * Switchs randomly the owner of the lobby.
   * If the lobby is empty, the owner is not changed.
   * @returns {number} The new owner's id or undefined if the lobby is empty.
  */
  switchOwner() {
    if (this.isEmpty())
      return undefined;
    const keys = Array.from(this.#players.keys());
    this.#ownerId = keys[Math.floor(Math.random() * keys.length)];
    return this.#ownerId;
  }
}

module.exports = Lobby;
