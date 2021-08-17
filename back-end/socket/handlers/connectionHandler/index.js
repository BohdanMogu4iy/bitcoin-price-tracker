const socketConfig = require("../../config").socket

const connectionHandler = io => {
    return async socket => {
        socket.emit(...socketConfig.emit.CONNECTED(socket))
        console.log(`user connected\n\ton socket: ${socket.id}`)

        socket.on(...socketConfig.handle.DISCONNECT(socket))
    }
}

module.exports = connectionHandler