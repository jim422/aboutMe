import ko from 'knockout'
import tpl from './tpl/common_select_platform.tpl'
import { CommonComponentModel } from './model/common_component_model.js';

ko.components.register('common-select-platform', {
	viewModel: function (params) {
		var self = this;
		CommonComponentModel.call(self, params);
		self.platforms = params.platforms;
		self.platform_name = params.platform_name;
		self.showPlatformList = showPlatformList;
		self.validate_list.push(params.validate.bind(this));
		self.data_target = params.data_target;

		self.value.subscribe(function (value) {
			params.validate.call(self)
		})
	},
	template: tpl()
})


function showPlatformList() {
	var self = this
	var winViewModel = {
		platforms: self.platforms,
		platform_name: self.platform_name,
		value: self.value,
		selectPlatform: selectPlatform,
	}
	var win = new W.Window({
		title: '选择平台',
		width: 630,
		height: 415,
		html: winTpl,
	})
	win.show()
	ko.applyBindings(winViewModel, win.el[0])

	function selectPlatform() {
		winViewModel.value(this.pid)
		winViewModel.platform_name(this.platform_name)
		win.close()
	}
}
