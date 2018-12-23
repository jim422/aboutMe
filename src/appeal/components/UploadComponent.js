import React, { Component } from 'react';
import { Upload, Button, Icon } from 'antd';

export default class UploadComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			btnVisible: true,
		};
	}

	onChange = ({ file, fileList }) => {
		if (file.status === 'uploading') {
			this.setState({
				loading: true,
			});
		} else {
			this.setState({
				loading: false,
			});
		}

		if (fileList.length >= this.props.uploadProps.limit) {
			this.setState({
				btnVisible: false,
			});
		} else {
			this.setState({
				btnVisible: true,
			});
		}

		this.props.onChange({ file, fileList }, file.status);
	};

	render() {
		return (
			<Upload
				{...this.props.uploadProps}
				onChange={this.onChange}
			>
				{
					this.state.btnVisible
						? (
							<Button
								disabled={this.state.loading === true}
							>
								<Icon
									type={
										this.state.loading
											? 'loading'
											: 'upload'
									}
								/>上传
							</Button>
						)
						: null
				}
			</Upload>
		);
	}
}
