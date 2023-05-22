const express = require("express");

const server = express();

server.use(express.json());
const routers = require("./accounts/accounts-router");

server.use("/api/accounts",routers)

module.exports = server;
