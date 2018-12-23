import ko from 'knockout';
import webUploader from 'webuploader';
import tpl from './tpl/common_attachments.tpl';
import '../../../node_modules/webuploader/dist/webuploader.css';

ko.components.register('common-attachments', {
	viewModel (params) {
		const self = this;
		Object.assign(self, params);
		self.upload_url = params.upload_url;
		self.upload_limit = params.upload_limit || 1;

		self.content_tip = params.content_tip;
		self.validate_tip = params.validate_tip;
		self.attachments_list_for_show = ko.observableArray([]);
		self.uploading_file_id = ko.observable();

		self.validate_list.push(self.validate.bind(this));
		self.serialize_data_list.push(self.serialize.bind(this));

		self.uploader = setUploaderCfg(self);
		self.deleteFile = deleteFile;
		self.upload_btn_visible = ko.computed(uploadBtnVisible.bind(self));
	},
	template: tpl(),
});

function setUploaderCfg(params) {
	const uploader = webUploader.create({
		pick: {
			id: `#${params.id} .js_upload`,
			label: '上传',
		},
		formData: {
			token: params.token(),
		},
		server: params.upload_url,
		chunked: params.chunked || false,
		chunkSize: params.chunkSize || '',
		accepts: {
			title: 'Images',
			extensions: params.extensions,
			mimeTypes: 'image/*',
		},
		auto: true,
		disableGlobalDnd: params.disableGlobalDnd || true,
		fileNumLimit: params.upload_limit,
		fileSingleSizeLimit: params.max_file_size * 1024 * 1024,
	});

	uploader.onFileQueued = function (file) {
		// 加入队列前触发
		uploader.makeThumb(file, (err, src) => {
			file.src = src;

			params.attachments_list_for_show.push(file);
		});
	};

	uploader.onFileDequeued = function (file) {
		console.log(file);
	};

	uploader.onUploadStart = function (file) {
		// 设置需要显示loading的ID
		params.uploading_file_id(file.id);
	};

	uploader.onUploadComplete = function () {
		// 隐藏loading图标
		params.uploading_file_id('');
	};

	uploader.onUploadSuccess = function (file, response) {
		if (response.code === 1000) {
			params.attachments.push(response.data);
		}
	};

	return uploader;
}

function deleteFile(parent, index) {
	parent.uploader.removeFile(this);
	// 从数据列表中删除
	parent.attachments.splice(index, 1);

	// 从UI列表中删除
	parent.attachments_list_for_show.splice(index, 1);
}

function uploadBtnVisible() {
	const self = this;
	if (self.readonly === false) {
		return !(self.attachments().length >= self.upload_limit);
	}
		return true;
}
