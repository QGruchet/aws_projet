const sequelize = require('sequelize');
const db = require('../utils/db');
const User = require('../models/user');
const Room = require('../models/room');

const Player = db.define('player', {
  room_id: {
    type: sequelize.INTEGER,
    primaryKey: true
  },
  user_id: {
    type: sequelize.INTEGER,
    primaryKey: true
  },
  number: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  score: {
    type: sequelize.INTEGER,
    allowNull: false,
    default: 0
  }
}, {
  tableName: 'Player',
  timestamps: false
});

User.belongsToMany(Room, { through: Player, unique: false, foreignKey: 'user_id' });
Room.belongsToMany(User, { through: Player, unique: false, foreignKey: 'room_id' });

Player.sync()

module.exports = Player;