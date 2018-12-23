import React from 'react';
import { Form, InputNumber } from 'antd';
import validateRecordItem from '../validate/validateRecordItem';

const FormItem = Form.Item;

export default function RecordItem(props) {
	const { form: { getFieldDecorator }, field, item } = props;
	return (
		<FormItem
			label={item.name}
		>
			{
				getFieldDecorator(`${field}['value']`, {
					rules: [{
						required: item.required,
						validator: validateRecordItem(item),
					}],
				})(
					item.type === 'int'
						? <InputNumber min={0} />
						: <InputNumber min={0} max={100} />,
				)
			}
		</FormItem>
	);
}
