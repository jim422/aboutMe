import ko from 'knockout';
import webUploader from 'webuploader';
import tpl from './tpl/common_attachments.tpl';
import '../../../node_modules/webuploader/dist/webuploader.css';

ko.components.register('common-attachments', {
	viewModel: function (params) {
		var self = this;
		Object.assign(self, params);
		self.upload_url = params.upload_url;
		self.upload_limit = params.upload_limit || 1;

		self.content_tip = params.content_tip;
		self.validate_tip = params.validate_tip;
		self.attachments_list_for_show = ko.observableArray([]);
		/*if (self.validate == undefined) {
			self.validate = validate
		}
		self.validate_list.push(self.validate.bind(this))*/

		var uploader = setUploaderCfg(self)
	},
	template: tpl()
});

function setUploaderCfg(params) {
	var uploader = webUploader.create({
		pick: {
			id: '#' + params.id + ' .js_upload',
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
		//加入队列前触发
		uploader.makeThumb(file, function (err, src) {
			file.src = src;

			params.attachments_list_for_show.push(file)
		});
	};

	uploader.onUploadSuccess = function (file, response) {
		if (response.code === 1000) {
			params.attachment.push(response.data.filePath)
		}
	};

	return uploader;
}


