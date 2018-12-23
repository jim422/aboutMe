import ko from 'knockout';
import tpl from './tpl/common_platform_list.tpl';

ko.components.register('common-platform-list', {
	viewModel (params) {
		this.platform_list = params.data.platform_list;
		this.platform_id = params.data.platform_id;
		this.platform_name = params.data.platform_name;
		this.select_platform = selectPlatform;
		this.icon = function(weiboType) {
			return `http://localhost:9090/src/assets/image/icon_${weiboType}.png`;
		};
	},
	template: tpl(),
});

function selectPlatform(platformInfo) {
	this.platform_id(platformInfo.pid);
	this.platform_name(platformInfo.platform_name);
}
