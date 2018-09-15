const express = require('express');
const router = express.Router();

router.get('/jsonp', function (req, res) {
	let { wd, cb } = req.query;
	console.log(wd, cb)
	res.end(`${cb}('${wd}')`)
});

module.exports = {
	router
};