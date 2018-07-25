define(function (require) {
	var ko = require('knockout');
	var Model = require('./model/platformConfigModel.js');

	//组件
	require('./component/common_input_link.js');
	require('./component/common_input_number.js');
	require('./component/common_record_items.js');
	require('./component/common_select.js');
	require('./component/common_select_platfrom.js');
	require('../module_common/modal/common_modal.js');

	require('./css/platformConfig.css');


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
		}

		ajax.send();
	}

	function bindData(data) {
		var viewModel = new Model(data);
		viewModel.submit = submit;
		var el = document.getElementById('root');

		ko.applyBindings(viewModel, el)
	}

	function submit() {
		var self = this

		var validateResult =validateConfigItems(self.validate_list())

		if (validateResult == false)return

		if (viewModel.execution_result_link_required() == 2 && viewModel.execution_result_img_required() == 2) {
			W.alert('是否需要执行链接、是否需要执行截图至少一项选择“是”')
			return
		}
		serializeData(self.serialize_data_list())

		W.confirm('确认提交该平台配置信息？', function (sure) {
			if (sure) {
				fetchConfigItems()
			}
		})

	}


	init()
});