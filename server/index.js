const express = require('express');
const app = express();
const path = require('path');
const { conn, sync } = require('./db');

app.use('/api', require('./routes'));
app.use('/vendor', express.static(path.join(__dirname, '../node_modules')));

const port = process.env.PORT || 3000;

const server = app.listen(port, () => console.log(`** Listening on Port ${port} **`));

conn.sync();

// module.exports = server;
