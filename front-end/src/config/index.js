import connectedHandler from "@services/socketService/handlers/connectedHandler";

const config = {
    socket: {
        URL: process.env.REACT_APP_SERVER_HOST,
        ops: {
            autoConnect: false,
            transports: ['websocket'],
            upgrade: false
        },
        events: {
            CONNECTED: "connected",
            INTERVAL_UPDATE: "interval:update",
            PRICE_UPDATE: "price:update"
        },
        emit: {

        },
        handle: {
            CONNECTED: socket => {
                return [config.socket.events.CONNECTED, connectedHandler]
            }
        }
    }
}

export default config