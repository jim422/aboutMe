import React, {Component} from 'react'
import {Modal} from 'antd'


export class CommonModal extends Component {
	static defaultProps = {
		visible: false,
		cancelText: '关闭',
		okText: '确认',
		onOk: () => {},
		onCancel: () => {}
	};

	constructor(props) {
		super(props)
	};

	render() {
		return <Modal {...this.props}>
			{this.props.children}
		</Modal>
	}
}

