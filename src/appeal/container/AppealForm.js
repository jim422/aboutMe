/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Table } from 'antd';
import { fetchAppealReason } from '../actions/index';

import InputLink from '../components/InputLink';
import RecordList from '../components/RecordList';
import ScreenshotUpload from '../components/ScreenshotUpload';

import validateBeforeUpload from '../validate/validateBeforUpload';


const commonCfg = {
	action: '/upload/upload',
	beforeUpload: validateBeforeUpload,
	listType: 'picture-card',
	accept: 'image/jpeg, image/jpg, image/png',
	maxSize: '5',
};

function deliverFormProps(form) {
	const columns = [{
		title: '平台',
		dataIndex: 'platform_name',
		width: '80px',
		render: text => text,
	}, {
		title: '执行链接',
		dataIndex: 'execution_link',
		width: '200px',
		render: (text, record, index) => {
			return (
<InputLink
  form={form}
  field="execution_link"
  pattern={record.link_rules}
  index={index}
  className="execution_link"
/>
);
		},
	}, {
		title: '执行截图',
		dataIndex: 'execution_img',
		width: '364px',
		render: (text, record, index) => {
			const uploadProps = {
				...commonCfg,
				limit: record.execution_img_limit,
			};

			return (
<ScreenshotUpload
  form={form}
  field={`data[${index}]['execution_img']`}
  uploadProps={uploadProps}
  required
  message="请上传执行截图"
  getValueFromEvent={getValueFromEvent}
/>
);
		},
	}, {
		title: '数据截图',
		dataIndex: 'data_screenshot_img',
		width: '364px',
		render: (text, record, index) => {
			const uploadProps = {
				...commonCfg,
				limit: record.data_screenshot_limit,
			};
			return (
<ScreenshotUpload
  form={form}
  field={`data[${index}]['data_screenshot_img']`}
  uploadProps={uploadProps}
  required
  message="请上传执行截图"
  getValueFromEvent={getValueFromEvent}
/>
);
		},
	}, {
		title: '数据录入',
		dataIndex: 'record_items',
		render: (text, record, index) => {
			return (
<RecordList
  items={text}
  index={index}
  field="record_items"
  form={form}
/>
);
		},
	}];

	return columns;
}


class AppealForm extends Component {
	constructor(props) {
		super(props);
		window.setTimeout(() => {
			this.props.form.validateFields((err, values) => {
				console.log(values);
			});
		}, 6000);
	}

	render() {
		return (
			<div className="appeal-form-container">
				<Table
					dataSource={this.props.appealForm.platform_list}
					columns={deliverFormProps(this.props.form)}
					bordered
					pagination={false}
					rowKey={record => record.platform_id}
				/>
			</div>
		);
	}
}

const mapStateToProps = () => {

};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchAppealReason: (orderId) => dispatch(fetchAppealReason(orderId)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Form.create()(AppealForm));

function getValueFromEvent({ fileList }, status) {
	return { value: fileList.filter(item => item.status === 'done'), status };
}
