define(function (require) {
	var ko = require('knockout')
	var tpl = require('./tpl/common_select.tpl')
	var CommonComponentModel = require('./model/common_component_model.js')

	ko.components.register('common-select', {
		viewModel: function (params) {
			CommonComponentModel.call(this, params)
			this.select_items = params.select_items
		},
		template: tpl
	})
})