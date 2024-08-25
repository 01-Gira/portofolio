const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const { v4: uuidv4 } = require('uuid'); // Menggunakan uuid untuk generate UUID

const WorkExperienceProject = sequelize.define('work_experience_projects', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4, // Menggunakan uuid untuk default value
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    }
});


module.exports = WorkExperienceProject;
  