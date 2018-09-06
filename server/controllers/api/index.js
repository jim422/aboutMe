const express = require('express');
const router = express.Router();

const fs = require('fs');
const platformConfig = require('./platform_config/index');
router.use('/platform', platformConfig.router)


module.exports = {
	router: router
};