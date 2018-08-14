import ko from 'knockout';
import webUploader from 'webUploader';
import tpl from './tpl/common_attachments.tpl';
//import 'webuploaderCss';

ko.components.register('common-attachments', {
	viewModel: function (params) {
		var self = this;
		Object.assign(self, params);
		self.upload_url = params.upload_url;
		self.upload_limit = params.upload_limit || 1;
		self.img_examples = params.img_examples || ko.observableArray();
		self.is_show_content_tip = params.is_show_content_tip || false;

		self.is_show_example_tips = params.is_show_example_tips || ko.observable(false);

		self.content_tip = self.content_tip;
		self.validate_tip = self.validate_tip;

		/*if (self.validate == undefined) {
			self.validate = validate
		}
		self.validate_list.push(self.validate.bind(this))*/

		var uploader = setUploaderCfg(self)
	},
	template: tpl()
});

function setUploaderCfg(params) {
	console.log(params)
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
	})

	uploader.onFileQueued = function (file) {
		//加入队列前触发
		params.attachment.push(file)


		//删除文件
		/*$(document).on('click','.js_video_delete',function () {
			uploader.removeFile(file,true);
			$('.'+file.id).remove();

			W.EventManager.trigger('isMerged',[$('.task_video_step1'),$('.task_video_step2')])
		});*/

	};

	return uploader;
}


