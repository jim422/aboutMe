function validateLink() {
	var self = this;
	var result = true;
	if (this.required() == true && this.user_input().length > 0) {
		this.user_input().forEach(function (v, k) {
			if (v.link().replace(/(^\s+)|(\s+$)/g, '').length > 0) {
				self.validate_tip('')
			} else {
				self.validate_tip(self.error_tip)
				result = false
				return false
			}
		})
	} else if (this.required() == true && this.user_input().length == 0) {
		self.validate_tip(self.error_tip)
		result = false
	} else {
		result = true
	}
	return result
}

export {
	validateLink
}
