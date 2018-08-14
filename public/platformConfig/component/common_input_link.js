import ko from 'knockout'
import tpl from './tpl/common_input_link.tpl';
import { CommonComponentModel } from './model/common_component_model.js'

ko.components.register('common-input-link', {
	viewModel: function (params) {
		CommonComponentModel.call(this, params);
		this.user_input = params.user_input;
		this.addInputEl = addInputEl;
		this.deleteInputEl = deleteInputEl;
		this.validate = params.validate;
		this.validate_list.push(params.validate.bind(this));
		this.serialize_data_list.push(serialize.bind(this))
	},
	template: tpl()
});

function addInputEl() {
	this.user_input.push({link: ko.observable('')})
}

function deleteInputEl() {
	this.user_input.pop()
}


function serialize() {
	var self = this
	var uerInputLinkPrefix = self.user_input().map(function (key, item) {
		if (item.link().length > 0) {
			return item.link().replace(/(^\s+)|(\s+$)/g, '')
		}
	})
	self.value(uerInputLinkPrefix)
}
