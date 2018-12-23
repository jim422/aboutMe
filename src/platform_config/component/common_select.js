import ko from 'knockout';
import tpl from './tpl/common_select.tpl';
import CommonComponentModel from './model/common_component_model';

ko.components.register('common-select', {
	viewModel (params) {
		CommonComponentModel.call(this, params);
		this.select_items = params.select_items;
	},
	template: tpl(),
});
