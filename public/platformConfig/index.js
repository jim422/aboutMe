import ko from 'knockout'
import  axios from 'axios';
import { Model } from './model/platformConfigModel.js';
import { ModalModel } from '../module_common/modal/model/model.js'
import UIkit from 'uikit';
import '../../node_modules/uikit/dist/css/uikit.min.css'
import './css/platformConfig.css'

//组件
import './component/common_attachments.js';
import './component/common_input_link.js';
import './component/common_input_number.js';
import './component/common_record_items.js';
import './component/common_select.js';
import './component/common_select_platfrom.js';


//验证
import { validateLink } from './validate/validateLink';
import { validateNumber } from './validate/validateNumber';
import { validatePlatform } from './validate/validatePlatform';

window.ko = ko;

function init() {
	fetchData()
}
function fetchData() {
	axios.get('/api/config.json')
		.then((data) => {
			bindData(data.data)
		})

}

function bindData(data) {
	var viewModel = new Model(data);
	viewModel.submit = submit;
	viewModel.validateLink = validateLink;
	viewModel.validateNumber = validateNumber;
	viewModel.validatePlatform = validatePlatform;
	viewModel.showPlatformList = showPlatformList

	var el = document.getElementById('root');
	ko.applyBindings(viewModel, el)
}

function submit() {
	var self = this;

	var validateResult = validateConfigItems(self.validate_list());

	if (validateResult == false) return;

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
	var result = true;
	list.forEach(function (validateFn, k) {
		if (validateFn() == false) {
			result = false;
			return false
		}
	});
	return result
}

function showPlatformList() {
	var modal = new ModalModel({
		id: 'platformList'
	});
	modal.show()
}

init();

