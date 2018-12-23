import ko from 'knockout';
import defaultConfig from '../constants/default_config';


export default function Model(data) {
	const self = this;

	self.platformList = data.platformList;
	self.uploadToken = data.uploadToken;
	self.platform = data.platform;
	self.data_screenshot = {};
	self.execution_result = {};

	self.platform_id = ko.observable(data.platform.pid);
	self.platform_name = ko.observable(data.platform.platform_name);

	//是否需要执行链接
	self.execution_result_link_required = ko.observable(data.execution_result.link_required || defaultConfig.execution_result_link_required);

	//执行链接前缀
	self.execution_result_link_prefix = ko.observableArray();
	self.user_input_link_prefix = ko.observableArray(defaultConfig.execution_result_link_prefix);

	//是否需要执行截图
	self.execution_result_img_required = ko.observable(data.execution_result.img_required || 1);

	//可上传执行截图数量
	self.execution_result_img_limit = ko.observable(data.execution_result.img_limit || 2);

	//执行截图样例
	self.execution_result_img_examples = ko.observableArray(data.execution_result.img_examples);

	//是否需要数据截图
	self.data_screenshot_required = ko.observable(data.data_screenshot.required || defaultConfig.data_screenshot_required);

	//可上传数据截图数量
	self.data_screenshot_limit = ko.observable(data.data_screenshot.limit || defaultConfig.data_screenshot_limit);

	//数据截图样例
	self.data_screenshot_examples = ko.observableArray(data.data_screenshot.examples);

	//数据录入
	self.data_screenshot_record_items = ko.observableArray([]);
	self.record_items = self.processRecordItems(data.recordItems);

	//添加执行内容分发平台是否可选
	self.show_for_add_execution_content = ko.observable(data.platform.show_for_add_execution_content || defaultConfig.show_for_add_execution_content);

	//添加执行内容分发平台是否热门
	self.popular_for_add_execution_content = ko.observable(data.platform.popular_for_add_execution_content || defaultConfig.popular_for_add_execution_content);

	self.select_items = ko.observable(defaultConfig.selectItems);
	self.validate_list = ko.observableArray();
	self.serialize_data_list = ko.observableArray();
	self.upload_token = ko.observable(data.uploadToken);
	self.upload_url = ko.observable('/upload/upload');
	self.image_upload_disable = ko.observable();

	self.readonly = ko.observable(false);

	self.execution_result_link_prefix_required = ko.computed(() => {
		return self.execution_result_link_required() === true;
	});

	self.depend_on_execution_result_img_required = ko.computed(() => {
		return self.execution_result_img_required() === true;
	});

	self.depend_on_data_screenshot_required = ko.computed(() => {
		return self.data_screenshot_required() === true;
	});
}

Model.prototype.processRecordItems = function (recordItems) {
	return recordItems.map(item => {
		item.needed = false;
		item.required = false;
		return item;
	});
};
