const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const { v4: uuidv4 } = require('uuid'); // Menggunakan uuid untuk generate UUID

const User = sequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: uuidv4, // Menggunakan uuid untuk default value
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;
