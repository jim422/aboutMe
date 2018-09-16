function listen(io) {
	io.on('connection', function (socket) {
		socket.on('hello', function (data) {
			socket.emit('fine', {data: 'from websocket'})
		})
	})
}

module.exports = {
	listen
}