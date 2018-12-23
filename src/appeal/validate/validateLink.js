function validateLink(pattern) {
	//把字符串转换为正则 'https://' => /^https:\/\//
	const regList = pattern.map(item => new RegExp(`^${item}`));

	return (rule, value, cb) => {
		if (value === undefined || value === '') {
			return cb('请填写执行链接');
		}

			return regList.find(item => item.test(value))
				? cb()
				: cb('输入的链接格式不符合规则');
	};
}

export default validateLink;
