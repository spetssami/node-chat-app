const socket = io();

socket.on('connect', () => {
	console.log('connected')

});

socket.on('disconnect', () => {
	console.log('disconnected')
});

socket.on('newMessage', (message) => {
	console.log('newMessage', message)
});