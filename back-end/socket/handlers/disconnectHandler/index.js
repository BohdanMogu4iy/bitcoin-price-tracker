const disconnectHandler = socket => {
    return async data => {
        console.log(`user closed connection\n\ton socket: ${socket.id}`)
    }
}

module.exports = disconnectHandler