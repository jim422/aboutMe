seajs.config({
	debug: true,
	alias: {
		'knockout': 'node_modules/knockout/build/output/knockout-latest.js',
		'seajs-text': 'node_modules/seajs/_site/dist/seajs-text.js',
		'webUploader': 'node_modules/webuploader/dist/webuploader.js',
		'webuploaderCss': 'node_modules/webuploader/css/webuploader.css',
		'jQuery': 'node_modules/jquery/dist/jquery.min.js'
	},
	base: './',
	charset: 'utf-8',
	preload: ['seajs-text']
});



var ko;
var jQuery;
seajs.on('exec', function(data) {
	if (data.uri === seajs.resolve('knockout')) {
		ko = data.exports;
	}

	if (data.uri === seajs.resolve('jQuery')) {
		jQuery = data.exports
	}
});