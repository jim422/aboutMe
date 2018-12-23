import React, { Component } from 'react';
import { Form } from 'antd';
import UploadComponent from './UploadComponent';

const FormItem = Form.Item;

export default class ScreenshotUpload extends Component {
	validator = (rule, value, cb) => {
		if (value === undefined) {
			cb(rule.message);
		} else if (value.value.length === 0) {
			value.status === 'uploading'
				? cb()
				: cb(rule.message);
		} else {
			cb();
		}
	}

	render() {
		const {
			form: { getFieldDecorator },
			field,
			uploadProps,
			required,
			message,
			getValueFromEvent,
		} = this.props;

		return (
			<FormItem>
			{
				getFieldDecorator(field, {
					rules: [{
						require: required,
						message,
						validator: this.validator,
					}],
					getValueFromEvent,
				})(
					<UploadComponent
						uploadProps={uploadProps}
					/>,
				)
			}
			</FormItem>
		);
	}
}
