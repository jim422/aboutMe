define(function (require) {
	var ko = require('knockout')
	var tpl = require('./tpl/common_input_number.tpl')
	var CommonComponentModel = require('./model/common_component_model.js')

	ko.components.register('common-input-number', {
		viewModel: function (params) {
			CommonComponentModel.call(this, params)
			$.extend(this, params)
			this.validate = validate
			this.validate_list.push(validate.bind(this))
		},
		template: tpl
	})

	function validate() {
		var result = false
		if (this.required() == true) {
			if (this.value() === '') {

				this.validate_tip(this.error_tip)
			} else if (this.value() > this.max) {

				this.validate_tip(this.higher_than_max_tip)
			} else if (this.value() < this.min) {

				this.validate_tip(this.lower_than_min_tip)
			} else {
				result = true
				this.validate_tip('')
			}
		} else {
			result = true
			this.validate_tip('')
		}
		return result
	}
})