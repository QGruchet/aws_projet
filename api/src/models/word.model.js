const sequelize = require('sequelize');
const db = require('../utils/db');

const Word = db.define('word', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    text: {
        type: sequelize.STRING(30),
        allowNull: false,
        unique: true
    },
    difficulty: {
        type: sequelize.ENUM('easy', 'normal', 'hard'),
        allowNull: false,
    }
}, {
    tableName: 'Word',
    timestamps: false
});

module.exports = Word;