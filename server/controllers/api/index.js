const express = require('express');
const router = express.Router();

const fs = require('fs');
const platformConfig = require('./platform_config/index');
const appeal = require('./appeal/index');

router.use('/platform', platformConfig.router);
router.use('/appeal', appeal.router);

module.exports = {
	router: router
};