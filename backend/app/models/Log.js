const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const { v4: uuidv4 } = require('uuid'); // Menggunakan uuid untuk generate UUID

const Log = sequelize.define('logs', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4, // Menggunakan uuid untuk default value
        primaryKey: true
    },
    action: DataTypes.STRING,
    timestamp: DataTypes.DATE
});



module.exports = Log;