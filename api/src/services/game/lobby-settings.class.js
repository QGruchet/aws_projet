class LobbySettings {
  static MAX_DRAW_TIME = 300;
  static MAX_PLAYERS = 32;
  static MAX_ROUNDS = 100;
  static MIN_DRAW_TIME = 2;
  static MIN_PLAYERS = 2;
  static MIN_ROUNDS = 1;

  /**
   * Constructor for LobbySettings.
   * @param {number} maxRounds The maximum number of rounds.
   * @param {number} drawTime The allowed time for drawing.
   * @param {string} isPrivate Whether the lobby is private or not.
   */
  constructor(maxRounds = 3, drawTime = 3, isPrivate = true) {
    this.maxPlayers = 8;
    this.maxRounds = maxRounds;
    this.drawTime = drawTime;
    this.isPrivate = isPrivate;
  }
}

module.exports = LobbySettings;
