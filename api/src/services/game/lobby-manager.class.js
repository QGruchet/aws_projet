const Lobby = require('./lobby.class');
const Random = require('../../utils/random.utils');

class LobbyManager {
  #lobbies;

  /**
   * Creates a new empty lobby.
   */
  constructor() {
    this.#lobbies = new Map();
  }

  /**
   * Creates a new lobby.
   * @returns {Lobby} The new lobby.
   */
  create() {
    // Las Vegas algorithm
    const id = undefined;
    do
      id = Random.generateHexString(16);
    while (this.lobbies.has(id));
    const lobby = new Lobby();
    this.lobbies.set(id, lobby);
    return lobby;
  }

  /**
   * Finds a lobby by its id.
   * @param {string} id The identifier of the lobby.
   * @returns {Lobby} The lobby or undefined if it doesn't exist.
   */
  find(id) {
    return this.#lobbies.get(id);
  }

  /**
   * Removes a lobby from the manager.
   * @param {id} id The identifier of the lobby.
   * @returns {boolean} False if the lobby doesn't exist, true otherwise.
   */
  remove(id) {
    return this.#lobbies.delete(id);
  }

  /**
   * Randomly selects a public lobby.
   * If no lobby is available, creates a new one.
   * @returns {Lobby} The selected lobby.
   */
   selectRandomPublicLobby() {
    const lobbies = Array.from(this.#lobbies.values())
      .filter(lobby => lobby.isPublic);
    return lobbies.length ? lobbies[Math.floor(Math.random() * lobbies.length)] : this.create();
  }
}

module.exports = LobbyManager;
