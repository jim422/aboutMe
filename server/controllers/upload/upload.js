const express = require('express');
const router = express.Router();
const server = require('http');
const path = require('path');
router.get('/upload', function (req, res) {

})

router.post('/upload', function (req, res) {
	var file = req.files.file;
	var filePath = path.resolve(__dirname, '../../attachments/' + file.md5 + file.name);

	file.mv(filePath, function (err) {
		if (err) {
			res.write(JSON.stringify({
				code: 0,
				msg: '上传失败'
			}))
		} else {
			console.log();
			res.write(JSON.stringify({
				code: 1000,
				msg: '上传成功',
				data: {
					filePath: filePath
				}
			}));
		}

		res.end()
	});
});

module.exports = {
	router: router
};