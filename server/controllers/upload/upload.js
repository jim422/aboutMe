const express = require('express');
const router = express.Router();

const urlLib = require('url');
const fs = require('fs');
const formidable = require('formidable');
const util = require('util');

router.get('/upload', function (req, res) {

})

router.post('/upload', function (req, res) {
	var form = new formidable.IncomingForm();

	form.parse(req, function(err, fields, files) {
		res.writeHead(200, {'content-type': 'text/plain'});
		res.write('received upload:\n\n');
		res.end(util.inspect({fields: fields, files: files}));
		console.log(files)
	});
})

module.exports = {
	router: router
}