const socketEmitter = require("../../emitter")
const socketConfig = require("../../../config").SOCKET
const disconnectHandler = require("../disconnectHandler")
const intervalUpdateHandler = require("../intervalUpdateHandler");

const connectionHandler = io => {
    return async socket => {
        socketEmitter.CONNECTED(socket)
        await console.log(`user connected\n\ton socket: ${socket.id}`)

        socket.on(socketConfig.events.INTERVAL_UPDATE, intervalUpdateHandler(socket))
        socket.on(socketConfig.events.DISCONNECT, disconnectHandler(socket))
    }
}

module.exports = connectionHandler