const Lobby = require('./game/lobby.class');
const LobbyManager = require('./game/lobby-manager.class');
const Player = require('./game/player.class');
const User = require('../models/user.model');
const Random = require("../utils/random.utils");

class GameService {
  #lobbyManager;
  #clients;

  constructor() {
    this.#lobbyManager = new LobbyManager();
    this.#clients = new Map();
  }

  /**
   * Assigns a random lobby to the player.
   * @param {number} playerId The player's id.
   * @returns {Lobby} The lobby where the player was assigned or undefined on failure.
   */
   assign(playerId) {
    if (this.#clients.get(playerId) !== undefined)
      return undefined;
    const lobby = this.#lobbyManager.selectRandomPublicLobby();
    lobby.join(playerId);
    this.#clients.set(playerId, lobby.id);
    return lobby;
  }

  /**
   * Connects a player.
   * @param {string} socketId The player's socket id.
   */
  connect(socketId) {
    this.#clients.set(socketId, undefined);
  }

  /**
   * Creates a new lobby.
   * @param {Player} owner The owner of the lobby.
   * @returns The new lobby.
   */
   createLobby(owner) {
    // Las Vegas algorithm
    let lobbyId = undefined;
    do
      lobbyId = Random.generateHexString(16);
    while (this.lobbies.has(lobbyId));
    const lobby = new Lobby();
    lobby.join(owner);
    this.lobbies.set(lobbyId, lobby);
    return lobby;
  }

  /**
   * Disconnects a client.
   * @param {string} socketId  The client's socket id.
   * @returns {Lobby} The lobby where the client was disconnected from or undefined if the client wasn't playing.
   */
   disconnect(socketId) {
    const lobbyId = this.#clients.get(socketId);
    if (!lobbyId)
      return undefined;
    this.#clients.delete(socketId);
    const lobby = this.#lobbyManager.find(lobbyId);
    if (!lobby)
      return undefined;
    if (lobby.isEmpty())
      this.#lobbyManager.remove(lobbyId);
    return lobby;
  }

  /**
   * Joins a lobby.
   * @param {User} user The user to join.
   * @param {string} lobbyId The lobby's id.
   * @returns {Lobby} The lobby or undefined if it doesn't exist.
   */
  join(user, lobbyId) {
    const lobby = this.#lobbyManager.find(lobbyId);
    if (!lobby)
      return undefined;
    lobby.join(user);
    this.clients.set(user.id, lobbyId);
    return lobby;
  }
}

module.exports = new GameService();
