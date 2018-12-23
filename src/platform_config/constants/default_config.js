import ko from 'knockout';

export default {
	execution_result_link_required: true,
	execution_result_link_prefix: [
		{ link: ko.observable('http://') },
		{ link: ko.observable('https://') },
	],
	selectItems: [{ id: 1, text: '是' }, { id: 2, text: '否' }],
	execution_result_img_required: true,
	execution_result_img_limit: 2,
	data_screenshot_required: true,
	data_screenshot_limit: 10,
	show_for_add_execution_content: true,
	popular_for_add_execution_content: false,
};
