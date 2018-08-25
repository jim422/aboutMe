const express = require('express');
const router = express.Router();

const getConfig = require('./get_config');
const setConfig = require('./set_config');
router.use(getConfig.router);
router.use(setConfig.router);

module.exports = {
	router: router
}