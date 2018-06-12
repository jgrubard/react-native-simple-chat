const app = require('express').Router();
module.exports = app;

const { User } = require('../db').models;

app.get('/users', (req, res, next) => {
  console.log('******route')
  User.findAll()
    .then(users => {
      console.log('**USERS**', users)
      res.send(users)
    })
    .catch(next);
});
