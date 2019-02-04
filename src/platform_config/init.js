import ko from 'knockout';
import axios from 'axios';
import $ from 'jquery';
import UIkit from 'uikit';
import Model from './model/platform_config_model';
import ModalModel from '../module_common/modal/model/model';
import '../../node_modules/uikit/dist/css/uikit.min.css';
import Icons from '../../node_modules/uikit/dist/js/uikit-icons';
import '../css/index.css';
import './css/platform_config.css';

//组件
import './component/common_attachments';
import './component/common_input_link';
import './component/common_input_number';
import './component/common_record_items';
import './component/common_select';
import './component/common_select_platfrom';
import './component/common_platform_list';

//验证
import validateAll from './validate/validate_all';
import validateLink from './validate/validate_link';
import validateNumber from './validate/validate_number';
import validatePlatform from './validate/validate_platform';
import validateAttachments from './validate/validate_attachments';

//序列化
import serializeData from './serialize/serialize_data';
import serializeRecordItems from './serialize/serialize_record_items';
import serializeLink from './serialize/serialize_link';
import serializeAttachments from './serialize/serialize_attachments';

//为启用knockout插件把knockout 赋值给全局，
window.ko = ko;

UIkit.use(Icons);

function init() {
	fetchData();
}
function fetchData() {
	axios.get('/api/platform/getConfig')
		.then((data) => {
			bindData(data.data);
		});
}

function bindData(data) {
	const viewModel = new Model(data);
	viewModel.submit = submit;
	viewModel.validateLink = validateLink;
	viewModel.validateNumber = validateNumber;
	viewModel.validatePlatform = validatePlatform;
	viewModel.validateAttachments = validateAttachments;
	viewModel.showPlatformList = showPlatformList;
	viewModel.serializeLink = serializeLink;
	viewModel.serializeRecordItems = serializeRecordItems;
	viewModel.serializeAttachments = serializeAttachments;

	const el = document.getElementById('configItems');
	ko.applyBindings(viewModel, el);
}

function submit() {
	const self = this;

	const validateResult = validateAll(self.validate_list());

	if (validateResult === false) return;

	if (self.execution_result_link_required() === 2 && self.execution_result_img_required() === 2) {
		UIkit.notification({
			message: '是否需要执行链接、是否需要执行截图至少一项选择“是”',
			status: 'danger',
			pos: 'top-center',
			timeout: 2000,
		});

		return;
	}

	UIkit.modal.confirm('确认提交该平台配置信息？').then(() => {
		const data = serializeData(self);
		fetchConfigItems(data);
	});
}

function fetchConfigItems(data) {
	axios.post('/api/platformConfig/setConfig', data)
		.then((response) => {
			console.log(response);
		})
		.catch((e) => {
			console.log(e);
		});
}

let modal;
function showPlatformList() {
	const self = this;
	if (!UIkit.modal('#platformList')) {
		const viewModel = {
			platform_id: ko.observable(),
			platform_name: ko.observable(),
			platform_list: this.platformList,
		};

		modal = new ModalModel({
			title: '选择平台',
			id: 'platformList',
			content: '<common-platform-list params="data: $data"></common-platform-list>',
			confirmCallback: confirmCallback.bind(self, viewModel),
		});

		modal.show();

		ko.applyBindings(viewModel, $(`#${modal.id}`)[0]);
	} else {
		modal.show();
	}
}

function confirmCallback(selected) {
	this.platform_id(selected.platform_id());
	this.platform_name(selected.platform_name());
}

// init();

export default init;
