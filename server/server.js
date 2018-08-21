const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const server = require('http').Server(app);

const controller = require('./controllers/controllers.js');

app.use(fileUpload());
app.use(controller.router);

server.listen('9090', function () {
	console.log('9090')
});


/*
app.post('/upload/upload', function (req, res) {
	res.end('test')
	console.log(req)
})
*/
