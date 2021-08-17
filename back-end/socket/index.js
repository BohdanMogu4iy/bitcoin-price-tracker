const socketConfig = require("../config").socket
const connectionHandler = require("./handlers/connectionHandler")

const initSocketIO = io => {
    io.on(socketConfig.events.CONNECTION, connectionHandler(io))
}

module.exports = initSocketIO