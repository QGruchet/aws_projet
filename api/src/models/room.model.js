const sequelize = require('sequelize');
const db = require('../utils/db');
const User = require('./user');

const Room = db.define('room', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    max_players: {
        type: sequelize.SMALLINT,
        allowNull: false
    },
    nb_rounds: {
        type: sequelize.SMALLINT,
        allowNull: false
    },
    draw_time: {
        type: sequelize.SMALLINT,
        allowNull: false
    }
}, {
    tableName: 'Room',
    timestamps: false
});

User.hasMany(Room, {
    foreignKey: {
        name: 'host_id',
        allowNull: false
    }
});
Room.belongsTo(User, {
    foreignKey: {
        name: 'host_id',
        allowNull: false
    }
});

module.exports = Room;