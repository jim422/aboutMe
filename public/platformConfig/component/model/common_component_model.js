define(function (require) {
	var ko = require('knockout');

	function CommonComponentModel(params) {
		this.friendly_name = ko.observable(params.friendly_name)
		this.value = params.value
		this.validate_list = params.validate_list || ko.observableArray()
		this.serialize_data_list = params.serialize_data_list || ko.observableArray()
		this.validate_tip = ko.observable()
		this.error_tip = params.error_tip || ''
		this.required = params.required || ko.observable(false)
		this.readonly = params.readonly || ko.observable(false)
	}
	return CommonComponentModel
})