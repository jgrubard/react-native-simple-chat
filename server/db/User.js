const { conn, Sequelize } = require('./conn');

const User = conn.define('user', {
  name: Sequelize.STRING
})

module.exports = User;
