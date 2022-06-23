const express = require('express');

// routes

// server, parsing json
const server = express();
server.use(express.json());

// connecting server to routes

// exporting server
module.exports = server;