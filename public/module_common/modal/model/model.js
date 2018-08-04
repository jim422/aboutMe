define(function (require) {
	/*var ko = require('knockout');*/

	function Model(params) {
		var self = this;

		/*self.id = ko.observable(params.id);
		self.width = ko.observable(params.width || '100%');
		self.height = ko.observable(params.height || '100%');
		self.content = ko.observable(params.content);
		self.onOk = params.onOk;
		self.title = params.title;
		self.onOkText = params.onOkText;
		self.onCancelText = params.onCancelText;
		self.showFooter = params.showFooter || true;
		self.className = params.className*/

		var defaultOpt = {
			id: 'modal',
			width: '200px',
			height: '200px',
			content: '',
			title: '',
			onOkText: '',
			onCancelText: '',
			className: '',
			onOk: function () {

			},
			onCancel: function () {

			}
		}
	}

	Model.prototype.confirmHandler = function () {
		console.log(this)
	}

	Model.prototype.cancelHandler = function () {
		console.log(this)
	}


	return Model


});