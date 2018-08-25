const express = require('express');
const router = express.Router();


router.post('/setConfig', function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});

	console.log(req);

	res.end('run')
});

module.exports = {
	router: router
}