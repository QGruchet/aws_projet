const { DataTypes, Model } = require('sequelize');
const db = require('../utils/db');

class User extends Model { otherPublicField }

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    wins: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    losses: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize: db,
    modelName: 'User',
    timestamps: false
});

module.exports = User;
