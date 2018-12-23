import UIkit from 'uikit';
import $ from 'jquery';
import tpl from '../tpl/common_modal.tpl';

class ModalModel {
	constructor(params = {}) {
		this.id = params.id || 'modal';
		this.width = params.width || '100%';
		this.height = params.height || '100%';
		this.content = params.content;
		this.onOk = params.onOk;
		this.title = params.title;
		this.onOkText = params.onOkText || '确认';
		this.onCancelText = params.onCancelText || '关闭';
		this.showFooter = params.showFooter || true;
		this.className = params.className;
		this.modal = init(params);
		this.confirmCallback = params.confirmCallback || $.noop;
	}

	show() {
		this.modal.show();
	}

	hidden() {
		this.modal.hidden();
	}
}

function init(params) {
	if (!UIkit.modal(`#${params.id}`)) {
		$('body').append(tpl());
		$('.js_modal_id').attr({
			id: params.id,
		});
		const el = UIkit.modal(`#${params.id}`).$el;

		$(el).find('.js_modal_title').html(params.title);
		$(el).find('.js_modal_content').html(params.content);

		UIkit.util.on('.js_modal_confirm', 'click', () => {
			params.confirmCallback();
			UIkit.modal(`#${params.id}`).hide();
		});
	}
	return UIkit.modal(`#${params.id}`);
}

export default ModalModel;
