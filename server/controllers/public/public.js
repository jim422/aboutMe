const express = require('express');
const router = express.Router();

const urlLib = require('url');
const fs = require('fs');

router.get('/*', function (req, res) {
	let urlObj = urlLib.parse(req.url, true);

	fs.readFile('./public/' + urlObj.pathname, function (err, data) {

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
}