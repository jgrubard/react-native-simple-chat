const { conn } = require('./conn');
const User = require('./User');

const seed = function() {
  return Promise.all([
    User.create({ name: 'jeremy' }),
    User.create({ name: 'su' })
  ])
}

conn.sync({ force: true })
  .then(() => {
    console.log('...seeding')
    return seed();
  })
  .then(() => console.log('...seeded...'))
  .then(() => {
    conn.close();
    console.log('connection closed...')
    return null;
  })
  .catch(err => {
    console.log('error seeding!')
    console.error(err)
  })
