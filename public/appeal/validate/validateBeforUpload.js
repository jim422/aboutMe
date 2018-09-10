function validateBeforeUpload(file, fileList) {
	let accept = this.accept;

	if (accept.includes(file.type)){
		return true
	}

	if (exceedMaxSize(this.maxSize, file.size)) {
		return true
	}

	if (fileList.length <= this.limit) {
		return true
	}

	return false
}

function exceedMaxSize(maxSize, fileSize) {
	let MaxMB = Number(maxSize) * 1024 * 1024;

	if (fileSize > MaxMB) {
		return false
	} else {
		return true
	}
}

export {
	validateBeforeUpload
}