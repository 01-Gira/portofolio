// models/workExperience.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const { v4: uuidv4 } = require('uuid'); // Menggunakan uuid untuk generate UUID

const WorkExperience = sequelize.define('work_experiences', {
  id: {
    type: DataTypes.UUID,
    defaultValue: uuidv4, // Menggunakan uuid untuk default value
    primaryKey: true
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false
  },
  company: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT 
  },
  start_date : {
    type : DataTypes.DATE
  },
  end_date : {
    type : DataTypes.DATE
  }
});

module.exports = WorkExperience;
