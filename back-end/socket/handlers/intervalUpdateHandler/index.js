const socketConfig = require("../../../config").SOCKET
const {createTask}  = require("../../../services/tasks")
const ScanInterval = require('../../../models').scanInterval

const intervalUpdateHandler = socket => {
    return async ({interval, currency}) => {
        console.log(`user updated interval\n\ton socket: ${socket.id}`)
        await ScanInterval.create({cryptocurrency: currency, interval})
        socket.broadcast.emit(socketConfig.events.INTERVAL_NEW, {interval, currency})
        createTask({interval, socket, currency})
    }
}

module.exports = intervalUpdateHandler