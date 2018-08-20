function serializeData(serializeList) {
	serializeList.forEach(function (serializeFn) {
		serializeFn()
	})
}

export {
	serializeData
}