const socketEmitter = require("../../emitter")
const socketConfig = require("../../../config").socket
const disconnectHandler = require("../disconnectHandler")

const connectionHandler = io => {
    return async socket => {
        socketEmitter.CONNECTED(socket)
        console.log(`user connected\n\ton socket: ${socket.id}`)

        socket.on(socketConfig.events.DISCONNECT, disconnectHandler(socket))
    }
}

module.exports = connectionHandler