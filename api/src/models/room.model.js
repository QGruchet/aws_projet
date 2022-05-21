const { DataTypes, Model } = require('sequelize');
const db = require('../utils/db');
const User = require('./user.model');

class Room extends Model { otherPublicField }

Room.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    max_players: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    nb_rounds: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    draw_time: {
        type: DataTypes.SMALLINT,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'Room',
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
});//

module.exports = Room;