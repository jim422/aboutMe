const express = require('express');
const router = express.Router();

const form = require('./form');

router.use(form.router);

module.exports = {
	router: router
}