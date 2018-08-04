define(function (require) {
	var ko = require('knockout')
	var tpl = require('./tpl/common_input_number.tpl')
	var CommonComponentModel = require('./model/common_component_model.js')

	ko.components.register('common-input-number', {
		viewModel: function (params) {
			CommonComponentModel.call(this, params)
			Object.assign(this, params)
			this.validate = params.validate
			this.validate_list.push(params.validate.bind(this))
		},
		template: tpl
	})


})