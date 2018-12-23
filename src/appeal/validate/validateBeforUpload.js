function validateBeforeUpload(file, fileList) {
	const accept = this.accept;

	if (accept.includes(file.type)) {
		return true;
	}

	if (exceedMaxSize(this.maxSize, file.size)) {
		return true;
	}

	if (fileList.length <= this.limit) {
		return true;
	}

	return false;
}

function exceedMaxSize(maxSize, fileSize) {
	const MaxMB = Number(maxSize) * 1024 * 1024;

	if (fileSize > MaxMB) {
		return false;
	}
		return true;
}

export default validateBeforeUpload;
