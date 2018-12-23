function serializeRecordItems() {
	const self = this;

	self.record_items.forEach((recordItem) => {
		if (recordItem.needed === true || recordItem.required === true) {
			recordItem.needed = recordItem.needed === true ? 1 : 2;
			recordItem.required = recordItem.required === true ? 1 : 2;
			self.value.push(recordItem);
		}
	});
}

export default serializeRecordItems;
