const { DataTypes, Model } = require('sequelize');
const db = require('../utils/db');

class Word extends Model { otherPublicField }

Word.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    text: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
    },
    difficulty: {
        type: DataTypes.ENUM('easy', 'normal', 'hard'),
        allowNull: false,
    }
}, {
    sequelize: db,
    modelName: 'Word',
    timestamps: false
});

module.exports = Word;