import React, { Component } from 'react'
import { Form, Input } from 'antd'
import { validateLink } from '../validate/validateLink';

const FormItem = Form.Item;

export default function InputLink(props) {
	const { form: { getFieldDecorator }, field, index, pattern } = props;
	return (
		<FormItem>
			{
				getFieldDecorator(`data[${index}][${field}]`, {
					rules: [
						{
							required: true,
							validator: validateLink(pattern)
						}
					]
				})(
					<Input/>
				)
			}
		</FormItem>
	)
}