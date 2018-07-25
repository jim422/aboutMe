const express = require('express');
const app = express();

const server = require('http').Server(app);

const controller = require('./controllers/controllers.js');


app.use(controller.router)

server.listen('9090', function () {
	console.log('9090')
})