function validateNumber() {
	var result = false
	if (this.required() == true) {
		if (this.value() === '') {

			this.validate_tip(this.error_tip)
		} else if (this.value() > this.max) {

			this.validate_tip(this.higher_than_max_tip)
		} else if (this.value() < this.min) {

			this.validate_tip(this.lower_than_min_tip)
		} else {
			result = true
			this.validate_tip('')
		}
	} else {
		result = true
		this.validate_tip('')
	}
	return result
}

module.exports = {
	validateNumber: validateNumber
}
