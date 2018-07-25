define(function (require) {
	var ko = require('knockout')
	var tpl = require('./tpl/common_input_link.tpl')
	var CommonComponentModel = require('./model/common_component_model.js')

	ko.components.register('common-input-link', {
		viewModel: function (params) {
			CommonComponentModel.call(this, params)
			this.user_input = params.user_input
			this.addInputEl = addInputEl
			this.deleteInputEl = deleteInputEl
			this.validate = validate
			this.validate_list.push(validate.bind(this))
			this.serialize_data_list.push(serialize.bind(this))
		},
		template: tpl
	})

	function addInputEl() {
		this.user_input.push({link: ko.observable('')})
	}

	function deleteInputEl() {
		this.user_input.pop()
	}

	function validate() {
		var self = this
		var result = true
		if (this.required() == true && this.user_input().length > 0) {
			$.each(this.user_input(), function (k, v) {
				if (v.link().replace(/(^\s+)|(\s+$)/g, '').length > 0) {
					self.validate_tip('')
				} else {
					self.validate_tip(self.error_tip)
					result = false
					return false
				}
			})
		} else if (this.required() == true && this.user_input().length == 0) {
			self.validate_tip(self.error_tip)
			result = false
		} else {
			result = true
		}
		return result
	}

	function serialize() {
		var self = this
		var uerInputLinkPrefix = $.map(self.user_input(), function (v, k) {
			if (v.link().length > 0) {
				return v.link().replace(/(^\s+)|(\s+$)/g, '')
			}
		})
		self.value(uerInputLinkPrefix)
	}
})