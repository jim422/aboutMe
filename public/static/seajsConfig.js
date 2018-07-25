seajs.config({
	debug: true,
	alias: {
		'knockout': 'node_modules/knockout/build/output/knockout-latest.js',
		'seajs-text': 'node_modules/seajs/_site/dist/seajs-text.js'
	},
	base: './',
	charset: 'utf-8',
	preload: ['seajs-text']
});



var ko;
seajs.on('exec', function(data) {
	if (data.uri === seajs.resolve('knockout')) {
		ko = data.exports;
	}
});