import React, { Component } from 'react'
import { init } from './init';

class PlatformConfig extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		init()
	}

	render() {
		return(
			<table className="documentTable" id="configItems">
				<tbody>
				<tr data-bind="component:{
            name: 'common-select-platform',
            params: {
                friendly_name: '平台',
                value: platform_id,
                platform_name: platform_name,
                platformList: platformList,
                validate_list: validate_list,
                error_tip: '请选择平台',
                readonly: readonly,
                validate: validatePlatform,
                showPlatformList: showPlatformList,
                platform_id: platform_id
            }
        }, css: readonly() ? '' : 'requireditem' ">
				</tr>
				<tr data-bind="component: {
            name: 'common-select',
            params: {
                friendly_name: '是否需要执行链接',
                select_items: select_items,
                value: execution_result_link_required,
                required: ko.observable(true)
            }
        }" className="requireditem"/>

				<tr data-bind="component: {
            name: 'common-input-link',
            params: {
                friendly_name: '执行链接前缀',
                value: execution_result_link_prefix,
                user_input: user_input_link_prefix,
                validate_list: validate_list,
                serialize_data_list: serialize_data_list,
                required: execution_result_link_prefix_required,
                error_tip: '请输入执行链接前缀',
                validate: validateLink,
                serialize: serializeLink
            }
        }, visible: execution_result_link_prefix_required" className="requireditem"/>

				<tr data-bind="component: {
            name: 'common-select',
            params: {
                friendly_name: '是否需要执行截图',
                select_items: select_items,
                value: execution_result_img_required
            }
        }" className="requireditem"/>

				<tr data-bind="component: {
            name: 'common-input-number',
            params: {
                friendly_name: '可上传执行截图数量',
                select_items: select_items,
                value: execution_result_img_limit,
                validate_list: validate_list,
                max: 10,
                min: 1,
                higher_than_max_tip: '可上传执行截图数量不能超过10张',
                lower_than_min_tip: '可上传执行截图数量不能少于1张',
                error_tip: '请输入可上传执行截图数量',
                required: depend_on_execution_result_img_required,
                validate: validateNumber
            }
        }, visible: depend_on_execution_result_img_required" className="requireditem"/>

				<tr data-bind="component: {
            name: 'common-attachments',
            params: {
                friendly_name: '执行截图样例',
                attachments: execution_result_img_examples,
                readonly: false,
                required: ko.observable(false),
                token: upload_token,
                upload_limit: 2,
                max_file_size: '5',
                tips: '执行截图样例图片，数量<=10，单图片<=5MB，格式：jpg、png、gif、jpeg',
                extensions: 'png, jpg, jpeg, gif',
                head_visible: true,
                upload_url: upload_url(),
                validate_list: validate_list,
                id: 'execution_result_img_examples',
                type: 'images',
                validate: validateAttachments,
                validate_tip: ko.observable(),
                serialize_data_list: serialize_data_list,
                serialize: serializeAttachments
            }
        }, visible: depend_on_execution_result_img_required" id="execution_result_img_examples"/>

				<tr data-bind="component: {
            name: 'common-select',
            params: {
                friendly_name: '是否需要数据截图',
                select_items: select_items,
                value: data_screenshot_required
            }
        }" className="requireditem"/>

				<tr data-bind="component: {
            name: 'common-input-number',
            params: {
                friendly_name: '可上传数据截图数量',
                select_items: select_items,
                value: data_screenshot_limit,
                required: depend_on_data_screenshot_required,
                min: 1,
                max: 10,
                higher_than_max_tip: '可上传数据截图数量不能超过10张',
                lower_than_min_tip: '可上传数据截图数量不能少于1张',
                error_tip: '请输入可上传数据截图数量',
                validate: validateNumber
            }
        }, visible: depend_on_data_screenshot_required" className="requireditem"/>

				<tr data-bind="component: {
            name: 'common-attachments',
            params: {
                friendly_name: '数据截图样例',
                attachments: data_screenshot_examples,
                readonly: false,
                required: ko.observable(false),
                token: upload_token,
                upload_limit: 2,
                max_file_size: '5',
                tips: '数据截图样例图片，数量<=10，单图片<=5MB，格式：jpg、png、gif、jpeg',
                extensions: 'png, jpg, jpeg, gif',
                head_visible: true,
                upload_url: upload_url(),
                validate_list: validate_list,
                id: 'data_screenshot_examples',
                type: 'images',
                validate: validateAttachments,
                validate_tip: ko.observable(),
                serialize_data_list: serialize_data_list,
                serialize: serializeAttachments
            }
        }, visible: depend_on_data_screenshot_required" id="data_screenshot_examples"/>

				<tr data-bind="component: {
            name: 'common-record-items',
            params: {
                friendly_name: '数据录入',
                value: data_screenshot_record_items,
                record_items: record_items,
                serialize_data_list: serialize_data_list,
                serialize: serializeRecordItems
            }
        }, visible: depend_on_data_screenshot_required"/>

				<tr data-bind="component: {
            name: 'common-select',
            params: {
                friendly_name: '添加执行内容分发平台是否可选',
                select_items: select_items,
                value: show_for_add_execution_content
            }
        }" className="requireditem"/>
				<tr data-bind="component: {
            name: 'common-select',
            params: {
                friendly_name: '添加执行内容分发平台是否热门',
                select_items: select_items,
                value: popular_for_add_execution_content
            }
        }" className="requireditem"/>
				<tr>
					<th/>
					<td>
						<br/>
						<button className="uk-button uk-button-primary" data-bind="click: submit">提交</button>
					</td>
				</tr>
				</tbody>
			</table>
		)
	}
}

export default PlatformConfig