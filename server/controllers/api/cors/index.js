const express = require('express');
const router = express.Router();

const jsonp = require('./jsonp/index');
const allowOrigin = require('./allowOrigin/index')

router.use(jsonp.router);
router.use(allowOrigin.router);

module.exports = {
	router: router
};