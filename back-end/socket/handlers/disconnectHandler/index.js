const disconnectHandler = io => {
    return async socket => {
        console.log(`user closed connection\n\ton socket: ${socket.id}`)
    }
}

module.exports = disconnectHandler