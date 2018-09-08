import ko from 'knockout'
import axios from 'axios';
import $ from 'jquery';
import { Model } from './model/platform_config_model.js';
import { ModalModel } from '../module_common/modal/model/model.js'
import UIkit from 'uikit';
import '../../node_modules/uikit/dist/css/uikit.min.css'
import Icons from '../../node_modules/uikit/dist/js/uikit-icons.js'
import '../css/index.css'
import './css/platform_config.css'

//组件
import './component/common_attachments.js';
import './component/common_input_link.js';
import './component/common_input_number.js';
import './component/common_record_items.js';
import './component/common_select.js';
import './component/common_select_platfrom.js';
import './component/common_platform_list.js';

//验证
import { validateAll} from './validate/validate_all';
import { validateLink } from './validate/validate_link';
import { validateNumber } from './validate/validate_number';
import { validatePlatform } from './validate/validate_platform';
import { validateAttachments } from './validate/validate_attachments';

//序列化
import { serializeData } from './serialize/serialize_data';
import { serializeRecordItems } from './serialize/serialize_record_items';
import { serializeLink } from './serialize/serialize_link';
import { serializeAttachments } from './serialize/serialize_attachments';

//为启用knockout插件把knockout 赋值给全局，
window.ko = ko;

UIkit.use(Icons);

function init() {
	fetchData()
}
function fetchData() {
	axios.get('/api/platform/getConfig')
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
	viewModel.validateAttachments = validateAttachments;
	viewModel.showPlatformList = showPlatformList;
	viewModel.serializeLink = serializeLink;
	viewModel.serializeRecordItems = serializeRecordItems;
	viewModel.serializeAttachments = serializeAttachments;

	var el = document.getElementById('configItems');
	ko.applyBindings(viewModel, el)
}

function submit() {
	var self = this;

	var validateResult = validateAll(self.validate_list());

	if (validateResult == false) return;

	if (self.execution_result_link_required() == 2 && self.execution_result_img_required() == 2) {
		UIkit.notification({
			message: '是否需要执行链接、是否需要执行截图至少一项选择“是”',
			status: 'danger',
			pos: 'top-center',
			timeout: 2000
		});

		return
	}

	UIkit.modal.confirm('确认提交该平台配置信息？').then(() => {
		var data = serializeData(self);
		console.log(data);
		fetchConfigItems(data)
	});
}

function fetchConfigItems(data) {
	axios.post('/api/platformConfig/setConfig', data)
		.then((response) => {
			console.log(response)
		})
		.catch((e) => {
			console.log(e)
		})
}

var modal;
function showPlatformList() {
	var self = this;
	if (!UIkit.modal('#platformList')) {
		var viewModel = {
			platform_id: ko.observable(),
			platform_name: ko.observable(),
			platform_list: this.platformList
		};

		modal = new ModalModel({
			title: '选择平台',
			id: 'platformList',
			content: '<common-platform-list params="data: $data"></common-platform-list>',
			confirmCallback: confirmCallback.bind(self, viewModel)
		});

		modal.show();

		ko.applyBindings(viewModel, $(`#${modal.id}`)[0])
	} else {
		modal.show()
	}

}

function confirmCallback(selected) {
	this.platform_id(selected.platform_id());
	this.platform_name(selected.platform_name());
}

//init();

export {
	init
}