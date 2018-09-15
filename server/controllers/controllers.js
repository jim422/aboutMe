const express = require('express');
const router = express.Router();
const urlLib = require('url');
const fs = require('fs');

const api = require('./api/index.js');
const upload = require('./upload/upload.js');
const cross = require('./api/cors/index');


router.use('/api', api.router);
router.use('/upload', upload.router);
router.use('/cors', cross.router);

router.get('/', function (req, res) {
	fs.readFile('index.html', function (err, data) {
		if (err) {
			res.write(JSON.stringify(err))
		} else {
			res.write(data)
		}

		res.end()
	})
})


module.exports = {
	router: router
}

