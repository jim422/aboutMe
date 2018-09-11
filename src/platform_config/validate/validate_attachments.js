function validateAttachments() {
	var result = false,
		attachmentsList = this.attachments().length;

	if (attachmentsList == 0) {
		this.validate_tip(`请上传${this.friendly_name}`)
	} else if (attachmentsList > this.upload_limit) {
		this.validate_tip(`不得超过${this.upload_limit}张`)
	} else {
		this.validate_tip('');
		result = true
	}

	return result
}

export {
	validateAttachments
}