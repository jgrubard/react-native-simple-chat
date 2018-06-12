const { conn, Sequelize } = require('./conn');
const User = require('./User');

const sync = () => {
  return conn.sync({ force: true })
}

module.exports = {
  conn,
  sync,
  models: {
    User
  }
}
