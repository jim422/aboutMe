class JsonpCors {
	defaultProps= {
		url: 'https://www.baidu.com/s',
		cb: 'JsonpCors',
		params: {},
	};

	constructor(props) {
		Object.assign(this, this.defaultProps, props);
	}

	fetch() {
		return new Promise((resolve) => {
			const script = document.createElement('script');
			const params = { ...this.params, cb: this.cb };
			window[this.cb] = function (data) {
				resolve(data);
				document.body.removeChild(script);
			};
			const query = serializeKeys(params);
			script.src = `${this.url}?${query}`;

			document.body.appendChild(script);
		});
	}
}

function serializeKeys(params) {
	const ary = [];
	const paramsKeys = Object.keys(params);
	paramsKeys.forEach((item) => {
		ary.push(`${item}=${params[item]}`);
	});

	return ary.join('&');
}

export default JsonpCors;
