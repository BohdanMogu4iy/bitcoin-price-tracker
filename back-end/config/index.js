const registerDisconnectHandler = require("../socket/handlers/disconnectHandler");
const registerConnectionHandler = require("../socket/handlers/connectionHandler")

const config = {
    socket: {
        events: {
            CONNECTION: "connection",
            DISCONNECT: "disconnect",
            CONNECTED: "connected",
            INTERVAL_UPDATE: "interval:update",
            PRICE_UPDATE: "price:update"
        },
        emit: {
            CONNECTED : socket => {
                return [config.socket.events.CONNECTED, {}]
            },
            PRICE_UPDATE: socket => {
                return [config.socket.events.PRICE_UPDATE, {}]
            },
            INTERVAL_UPDATE: socket => {
                return [config.socket.events.INTERVAL_UPDATE, {}]
            },
        },
        handle: {
            CONNECTION: io => {
                return [config.socket.events.DISCONNECT, registerDisconnectHandler(io)]
            },
            DISCONNECT: io => {
                return [config.socket.events.DISCONNECT, registerConnectionHandler(io)]
            },
        }
    }
}

module.exports = config