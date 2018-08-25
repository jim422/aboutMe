function validateAll(list) {
	var result = true;
	list.forEach(function (validateFn, k) {
		if (validateFn() == false) {
			result = false;
			return false
		}
	});
	return result
}

export {
	validateAll
}