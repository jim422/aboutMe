define(function (require) {
	var ko = require('knockout');
	var tpl = require('./tpl/common_platform_list.tpl')

	ko.components.register('platform-list', {
		viewModel: function(params) {
			this.platformList = params.platformList;
			this.selectedPlatform = params.selectedPlatform;
		},
		template: tpl
	})
});