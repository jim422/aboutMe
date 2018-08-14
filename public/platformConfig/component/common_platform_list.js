import ko from 'knockout';
import tpl from './tpl/common_platform_list.tpl';

ko.components.register('platform-list', {
	viewModel: function (params) {
		this.platformList = params.platformList;
		this.selectedPlatform = params.selectedPlatform;
	},
	template: tpl()
});
