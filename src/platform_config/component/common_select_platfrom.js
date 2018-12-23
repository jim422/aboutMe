import ko from 'knockout';
import tpl from './tpl/common_select_platform.tpl';
import CommonComponentModel from './model/common_component_model';
import '../css/modal.css';

ko.components.register('common-select-platform', {
	viewModel (params) {
		const self = this;
		CommonComponentModel.call(self, params);
		self.platformList = params.platformList;
		self.platform_name = params.platform_name;
		self.platform_id = params.platform_id;
		self.showPlatformList = params.showPlatformList;
		self.validate_list.push(params.validate.bind(this));
		self.data_target = params.data_target;
		self.value.subscribe(() => {
			params.validate.call(self);
		});
	},
	template: tpl(),
});
