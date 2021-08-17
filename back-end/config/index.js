const config = {
    socket: {
        events: {
            CONNECTION: "connection",
            DISCONNECT: "disconnect",
            CONNECTED: "connected",
            INTERVAL_UPDATE: "interval:update",
            PRICE_UPDATE: "price:update"
        }
    }
}

module.exports = config