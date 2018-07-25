define(function (require) {
	var ko = require('knockout')
	var tpl = require('./tpl/common_record_items.tpl')
	var CommonComponentModel = require('./model/common_component_model.js')

	ko.components.register('common-record-items', {
		viewModel: function (params) {
			CommonComponentModel.call(this, params)
			this.record_items = params.record_items
			this.serialize_data_list.push(serializeData.bind(this))
		},
		template: tpl
	})

	function serializeData() {
		var self = this

		$.each(self.record_items(), function (k, recordItem) {
			if (recordItem.needed == true || recordItem.required == true) {
				recordItem.needed = recordItem.needed == true ? 1 : 2
				recordItem.required = recordItem.required == true ? 1 : 2
				self.value.push(recordItem)
			}
		})
	}

})