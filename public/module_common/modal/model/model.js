define(function (require) {
	var ko = require('knockout');

	function Model(params) {
		var self = this;

		self.id = ko.observable(params.id);
		self.width = ko.observable(params.width || '100%');
		self.height = ko.observable(params.height || '100%');
		self.content = ko.observable(params.content);
		self.onOk = params.onOk;
		self.titl = params.title;
	}

	return Model
});