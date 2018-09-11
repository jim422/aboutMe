function serializeAttachments() {
	var result = false;

	return this.attachments().map(item => item.filePath)
}

export {
	serializeAttachments
}