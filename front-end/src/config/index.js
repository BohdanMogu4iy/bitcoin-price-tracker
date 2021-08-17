const config = {
    SOCKET: {
        URL: process.env.REACT_APP_SERVER_HOST,
        ops: {
            autoConnect: false,
            transports: ['websocket'],
            upgrade: false
        },
        events: {
            CONNECTED: "connected",
            INTERVAL_UPDATE: "interval:update",
            INTERVAL_NEW: "interval:new",
            PRICE_UPDATE: "price:update",
            CONNECT_ERROR: "connect_error"
        }
    },
    CRYPTOCURRENCY_PRICE_API: {
        url: process.env.REACT_APP_CRYPTOCURRENCY_API_HOST,
        endpoints: {
            getPriceData: new URL('/cryptocurrency/', process.env.REACT_APP_CRYPTOCURRENCY_API_HOST).href
        }

    }
}

export default config