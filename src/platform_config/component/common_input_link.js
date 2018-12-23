import ko from 'knockout';
import tpl from './tpl/common_input_link.tpl';
import CommonComponentModel from './model/common_component_model';

ko.components.register('common-input-link', {
	viewModel (params) {
		CommonComponentModel.call(this, params);
		this.user_input = params.user_input;
		this.addInputEl = addInputEl;
		this.deleteInputEl = deleteInputEl;
		this.validate = params.validate;
		this.validate_list.push(params.validate.bind(this));
		this.serialize_data_list.push(params.serialize.bind(this));
	},
	template: tpl(),
});

function addInputEl() {
	this.user_input.push({ link: ko.observable('') });
}

function deleteInputEl() {
	this.user_input.pop();
}
