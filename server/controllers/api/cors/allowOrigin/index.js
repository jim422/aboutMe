const express = require('express');
const router = express.Router();

router.post('/allowOrigin', function (req, res) {
	let origin = req.headers.origin;
	res.setHeader('Access-Control-Allow-Origin', origin);
	res.setHeader('Access-Control-Allow-Headers', 'name');
	res.end(origin)
});

module.exports = {
	router
}