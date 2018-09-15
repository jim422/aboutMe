class JsonpCors {
	defaultProps= {
		url: 'https://www.baidu.com/s',
		cb: 'JsonpCors',
		params: {}
	}

	constructor(props) {
		Object.assign(this, this.defaultProps, props);
	}

	fetch() {
		return new Promise((resolve, reject) => {
			window[this.cb] = function (data) {
				resolve(data);
				document.body.removeChild(script)
			};
			let script = document.createElement('script');
			let params = {...this.params, cb: this.cb };

			let query = this.serializeKeys(params);
			script.src = `${this.url}?${query}`;

			document.body.appendChild(script)
		})
	}

	serializeKeys(params) {
		let ary = [];
		let paramsKeys = Object.keys(params);
		paramsKeys.forEach((item, key) => {
			ary.push(`${item}=${params[item]}`)
		});

		return ary.join('&')
	}
}

export {
	JsonpCors
}