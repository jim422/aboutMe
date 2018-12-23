function serializeLink() {
	const self = this;
	const uerInputLinkPrefix = self.user_input().map((item) => {
		if (item.link().length > 0) {
			return item.link().replace(/(^\s+)|(\s+$)/g, '');
		}
			return undefined;
	});
	self.value(uerInputLinkPrefix);
}

export default serializeLink;
