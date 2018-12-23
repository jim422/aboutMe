import ko from 'knockout';
import knockoutMapping from 'knockout-mapping';
import { uselessFields } from '../constants/useless_fields';

ko.mapping = knockoutMapping;

function serializeData(viewModel) {
	viewModel.serialize_data_list().forEach((serializeFn) => {
		serializeFn();
	});
	ignoreUselessFields(viewModel);
	return ko.mapping.toJS(viewModel);
}

function ignoreUselessFields(viewModel) {
	let fields = [...uselessFields];
	if (viewModel.execution_result_link_required() === 2) {
		fields.push('execution_result_link_prefix');
	}

	if (viewModel.execution_result_img_required() === 2) {
		fields = uselessFields.concat(['execution_result_img_limit', 'execution_result_img_examples']);
	}

	if (viewModel.data_screenshot_required() === 2) {
		fields = uselessFields.concat([
			'data_screenshot_limit',
			'data_screenshot_examples',
			'data_screenshot_record_items',
			'data_screenshot_hogwarts_visibility',
		]);
	}

	ko.mapping.defaultOptions().ignore = fields;
}

export default serializeData;
