function validateAll(list) {
	let result = true;
	list.forEach((validateFn) => {
		if (validateFn() === false) {
			result = false;
			return false;
		}
	});
	return result;
}

export default validateAll;
