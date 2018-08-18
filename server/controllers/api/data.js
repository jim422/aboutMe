const express = require('express');
const router = express.Router();

const fs = require('fs');
const urlLib = require('url');

router.get('/*', function (req, res) {
	let urlObj = urlLib.parse(req.url, true);
	res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
	fs.readFile('./api' + urlObj.pathname, function (err, data) {
		if (err) {
			res.write(JSON.stringify(err))
		} else {
			res.write(data)
		}

		res.end()
	})
});

module.exports = {
	router: router
};