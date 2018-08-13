function validatePlatform() {
	var result = false;

	if (this.value() == undefined) {
		result = false;
		this.validate_tip(this.error_tip)
	} else {
		result = true;
		this.validate_tip('')
	}
	return result
}

module.exports = {
	validatePlatform: validatePlatform
};
