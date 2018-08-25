function validatePlatform() {
	var result = false;

	if (this.value() == '') {
		result = false;
		this.validate_tip(this.error_tip)
	} else {
		result = true;
		this.validate_tip('')
	}
	return result
}

export {
	validatePlatform
}
