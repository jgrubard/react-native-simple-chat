const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/simple_chat_db');

module.exports = { conn, Sequelize };
