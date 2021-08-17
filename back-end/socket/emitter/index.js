const socketConfig = require("../../config").socket
const connectedEmitter = require("./connectedEmitter")

module.exports = {
    CONNECTED: socket => {
        socket.emit(socketConfig.events.CONNECTED, connectedEmitter(socket))
    }
}