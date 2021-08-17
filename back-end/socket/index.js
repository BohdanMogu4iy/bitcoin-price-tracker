const socketConfig = require("express/lib/router");

const initSocketIO = io => {
    io.on(...socketConfig.handle.CONNECTION(io))
}

module.exports = initSocketIO