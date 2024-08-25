const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const { v4: uuidv4 } = require('uuid'); // Menggunakan uuid untuk generate UUID


const Description = sequelize.define('descriptions', {
  id: {
    type: DataTypes.UUID,
    defaultValue: uuidv4, // Menggunakan uuid untuk default value
    primaryKey: true
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  },
});

module.exports = Description;
