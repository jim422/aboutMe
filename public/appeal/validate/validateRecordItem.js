function validateRecordItem(item) {
	let reg = /^\+?[1-9]*$/;

	return (rule, value, cb) => {
		if (rule.required) {

			if (value === '' || value === undefined) {

				cb(`请填写${item.name}`)

			} else if(item.type === 'int') {

				reg.test(value)
					? cb()
					: cb('请输入正整数')
			}

		} else if (item.type === 'int' && value !== undefined) {

			reg.test(value)
				? cb()
				: cb('请输入正整数')

		} else {
			cb()
		}

	}
}


export {
	validateRecordItem
}