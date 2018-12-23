import React from 'react';
import { Form, Input } from 'antd';
import validateLink from '../validate/validateLink';

const FormItem = Form.Item;

export default function InputLink(props) {
	const { form: { getFieldDecorator }, field, index, pattern, className } = props;
	return (
		<FormItem>
			{
				getFieldDecorator(`data[${index}][${field}]`, {
					rules: [
						{
							required: true,
							validator: validateLink(pattern),
						},
					],
				})(
					<Input className={className} />,
				)
			}
		</FormItem>
	);
}
