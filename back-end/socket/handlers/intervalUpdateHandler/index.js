const socketConfig = require("../../../config").SOCKET
const {createTask}  = require("../../../services/tasks")
const ScanInterval = require('../../../models').scanInterval
const config = require("../../../config")

const intervalUpdateHandler = socket => {
    return async ({interval, cryptocurrency}) => {
        console.log(`user updated interval\n\ton socket: ${socket.id}`)
        await ScanInterval.create({cryptocurrency: cryptocurrency, interval})
        socket.broadcast.emit(socketConfig.events.INTERVAL_NEW, {interval, cryptocurrency})
        createTask({interval, cryptocurrency, io: config.SOCKET.io})
    }
}

module.exports = intervalUpdateHandler