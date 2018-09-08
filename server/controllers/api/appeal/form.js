const fs = require('fs');
const express = require('express');
const router = express.Router()

router.get('/form', function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'})

	fs.readFile(__dirname + '/appeal_form.json', function (err, data) {
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