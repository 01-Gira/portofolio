const { Sequelize } = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(`postgres://${process.env.DATABASE_PG_USER}:${process.env.DATABASE_PG_PASSWORD}@${process.env.DATABASE_PG_IP}:${process.env.DATABASE_PG_PORT}/${process.env.DATABASE_PG_DATABASE}`);

module.exports = sequelize;