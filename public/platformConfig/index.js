import ko from 'knockout'
import $ from 'jquery';
import Model from './model/platformConfigModel.js';
import './css/platformConfig.css'
//import { LocaleProvider, DatePicker, message } from 'antd';
console.log(ko, $);

//组件
/*
require('./component/common_input_link.js');
require('./component/common_input_number.js');
require('./component/common_record_items.js');
require('./component/common_select.js');
require('./component/common_select_platfrom.js');
require('./component/common_attachments.js');

require('./css/platformConfig.css');

//验证
var validateLink = require('./validate/validateLink');
var validateNumber = require('./validate/validateNumber');
var validatePlatform = require('./validate/validatePlatform');


function init() {
	fetchData()
}

function fetchData() {
	var ajax = new XMLHttpRequest();
	ajax.open('get', 'data/config.json');

	ajax.onreadystatechange = function () {
		if (ajax.readyState === 4 && ajax.status === 200) {

			bindData(JSON.parse(ajax.responseText))
		}
	};

	ajax.send();
}

function bindData(data) {
	var viewModel = new Model(data);
	viewModel.submit = submit;
	viewModel.validateLink = validateLink;
	viewModel.validateNumber = validateNumber;
	viewModel.validatePlatform = validatePlatform;

	var el = document.getElementById('root');

	ko.applyBindings(viewModel, el)
}

function submit() {
	var self = this;

	var validateResult = validateConfigItems(self.validate_list())

	if (validateResult == false) return

	if (self.execution_result_link_required() == 2 && self.execution_result_img_required() == 2) {
		UIkit.notification({
			message: '是否需要执行链接、是否需要执行截图至少一项选择“是”',
			status: 'danger',
			pos: 'top-center',
			timeout: 2000,
		});

		return
	}
	serializeData(self.serialize_data_list())

	W.confirm('确认提交该平台配置信息？', function (sure) {
		if (sure) {
			fetchConfigItems()
		}
	})

}

function validateConfigItems(list) {
	var result = true
	list.forEach(function (validateFn, k) {
		if (validateFn() == false) {
			result = false
			return false
		}
	})
	return result
}


init()*/
