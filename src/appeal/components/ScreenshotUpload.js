import React, { Component } from 'react'
import { Form } from 'antd'
import UploadComponent from '../components/UploadComponent'

const FormItem = Form.Item;

export default class ScreenshotUpload extends Component {
	constructor(props) {
		super(props)

	}

	validator = (rule, value, cb) => {

		if (value === undefined) {
			cb(rule.message)
		} else if (value.value.length === 0) {
			value.status === 'uploading'
				? cb()
				: cb(rule.message)
		} else {
			cb()
		}
	}
	render() {
		const {
			form: { getFieldDecorator },
			field,
			uploadProps,
			required,
			message,
			getValueFromEvent
		} = this.props;

		return (
			<FormItem>
			{
				getFieldDecorator(field, {
					rules: [{
						require: required,
						message: message,
						validator: this.validator
					}],
					getValueFromEvent: getValueFromEvent
				})(
					<UploadComponent
						uploadProps={ uploadProps }
					/>
				)
			}
			</FormItem>
		)
	}
}