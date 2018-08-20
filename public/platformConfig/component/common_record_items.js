import ko from 'knockout'
import tpl from './tpl/common_record_items.tpl';
import { CommonComponentModel } from './model/common_component_model.js';

ko.components.register('common-record-items', {
	viewModel: function (params) {
		CommonComponentModel.call(this, params);
		this.record_items = params.record_items;
		this.serialize_data_list.push(params.serialize.bind(this))
	},
	template: tpl()
});