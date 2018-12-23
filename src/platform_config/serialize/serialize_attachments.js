function serializeAttachments() {
	return this.attachments().map(item => item.filePath);
}

export default serializeAttachments;
