import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAppealReason } from '../actions/index';
import { Form } from 'antd'

import InputLink from '../components/InputLink'
import RecordList from '../components/RecordList.js'

import { Table } from 'antd'

function deliverFormProps(form) {
	const columns = [{
		title: '平台',
		dataIndex: 'platform_name',
		render: text => text
	}, {
		title: '执行链接',
		dataIndex: 'execution_link',
		render: (text, record, index) => {
			return <InputLink
				form={ form }
				field='execution_link'
				pattern={ record.link_rules }
				index={ index }
			/>
		}
	}, {
		title: '执行截图',
		dataIndex: 'execution_img',
		render: (text, record) => {

		}
	}, {
		title: '数据截图',
		dataIndex: 'data_screenshot_img',
		render: (text, record) => {

		}
	}, {
		title: '数据录入',
		dataIndex: 'record_items',
		render: (text, record, index) => {
			return <RecordList
				items={ text }
				index={ index }
				field='record_items'
				form={ form }
			/>
		}
	}];

	return columns;
}


class AppealForm extends Component {
	constructor(props) {
		super(props)
		window.setTimeout(() => {
			this.props.form.validateFields((err, values) => {
				console.log(values)
			})
		}, 6000)
	}

	render() {
		return (
			<div>
				<Table
					dataSource={ this.props.appealForm.platform_list }
					columns={ deliverFormProps(this.props.form) }
					bordered
					pagination={ false }
					rowKey={ record => record.platform_id }
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {

};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchAppealReason: (orderId) => dispatch(fetchAppealReason(orderId))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form.create()(AppealForm))