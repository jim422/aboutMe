const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const server = require('http').Server(app);
const io = require('socket.io')(server);

const controller = require('./controllers/controllers.js');
const socket = require('./controllers/api/cors/socket/index');

socket.listen(io)

app.use(fileUpload());
app.use(controller.router);


server.listen('9090', function () {
	console.log('9090')
});


