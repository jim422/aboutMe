function serializeLink() {
	var self = this;
	var uerInputLinkPrefix = self.user_input().map(function (item) {
		if (item.link().length > 0) {
			return item.link().replace(/(^\s+)|(\s+$)/g, '')
		}
	});
	self.value(uerInputLinkPrefix)
}

export {
	serializeLink
}