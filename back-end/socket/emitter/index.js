const socketConfig = require("../../config").SOCKET

module.exports = {
    CONNECTED: socket => {
        socket.emit(socketConfig.events.CONNECTED, {})
    }
}