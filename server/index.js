const express = require('express');
const app = express();
const path = require('path');
const { conn, sync } = require('./db');

app.use('/api', require('./routes'));
app.use('/vendor', express.static(path.join(__dirname, '../node_modules')));


const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log(`** Listening on Port ${PORT} **`))

conn.sync()

// module.exports = server;
