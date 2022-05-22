const { DataTypes, Model } = require('sequelize');
const db = require('../utils/db');
const User = require('../models/user.model');
const Room = require('../models/room.model');


class Player extends Model { otherPublicField }

Player.init({
  room_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    default: 0
  }
}, {
  sequelize: db,
  modelName: 'Player',
  timestamps: false
});

User.belongsToMany(Room, { through: Player, unique: false, foreignKey: 'user_id' });
Room.belongsToMany(User, { through: Player, unique: false, foreignKey: 'room_id' });

module.exports = Player;