import ko from 'knockout';
import tpl from './tpl/common_input_number.tpl';
import CommonComponentModel from './model/common_component_model';

ko.components.register('common-input-number', {
	viewModel (params) {
		CommonComponentModel.call(this, params);
		Object.assign(this, params);
		this.validate = params.validate;
		this.validate_list.push(params.validate.bind(this));
	},
	template: tpl(),
});
