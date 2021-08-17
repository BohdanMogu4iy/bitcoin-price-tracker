const {Sequelize} = require("sequelize")

const config = {
    SOCKET: {
        events: {
            CONNECTION: "connection",
            DISCONNECT: "disconnect",
            CONNECTED: "connected",
            INTERVAL_UPDATE: "interval:update",
            INTERVAL_NEW: "interval:new",
            PRICE_UPDATE: "price:update"
        }
    },
    DATABASE: {
        database: null,
        sequelize: null
    },
    COIN_MARKET_CAP_API: {
        url: null,
        secretHeaders: {
            'X-CMC_PRO_API_KEY': null
        }
    }
}

if (process.env.DATABASE_URL) {
    config.DATABASE.DATABASE_URL = process.env.DATABASE_URL
} else {
    console.error("DATABASE_URL is not set")
    process.exit(1)
}
if (process.env.COIN_MARKET_CAP_API_URL) {
    config.COIN_MARKET_CAP_API.url = process.env.COIN_MARKET_CAP_API_URL
} else {
    console.error("COIN_MARKET_CAP_API_URL is not set")
    process.exit(1)
}
if (process.env.COIN_MARKET_CAP_API_SECRET) {
    config.COIN_MARKET_CAP_API.secretHeaders["X-CMC_PRO_API_KEY"] = process.env.COIN_MARKET_CAP_API_SECRET
} else {
    console.error("COIN_MARKET_CAP_API_SECRET is not set")
    process.exit(1)
}
config.DATABASE.sequelize = new Sequelize(config.DATABASE.DATABASE_URL,
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    })

module.exports = config