import ko from 'knockout'
import tpl from './tpl/common_select.tpl'
import { CommonComponentModel } from './model/common_component_model.js';

ko.components.register('common-select', {
	viewModel: function (params) {
		CommonComponentModel.call(this, params);
		this.select_items = params.select_items
	},
	template: tpl()
});
