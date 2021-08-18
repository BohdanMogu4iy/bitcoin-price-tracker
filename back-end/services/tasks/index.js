const cron = require('node-cron')
const config = require("../../config")
const {getPrice} = require("../cryptocurrencyAPI");

const CryptocurrencyPrice = require('../../models').cryptocurrencyPrice


const scheduleString = {
    1: () => `${new Date().getSeconds()} * * * * *`,
    30: () => `${Math.floor(new Date().getMinutes() % 60)},${Math.floor((new Date().getMinutes() + 30) % 60)} * * * *`,
    60: () => `${new Date().getMinutes()} * * * *`,
    1440: () => `${new Date().getMinutes()} ${new Date().getHours()} * * *`
}

let scheduledTasks = []

const createTask = ({interval, cryptocurrency, io}) => {
    stopAllTasks()
    const task = cron.schedule(scheduleString[interval](), () => {
        console.log(`---------------------\nRunning Cron Job`);
        getPrice({slug: cryptocurrency})
            .then(data => {
                return CryptocurrencyPrice.create(
                    {
                        price: data.price,
                        currency: data.currency,
                        cryptocurrency: cryptocurrency,
                        interval: interval,
                        date: data.date
                    })
            }).then(data => {
                io.sockets.emit(config.SOCKET.events.PRICE_UPDATE, {priceData: data, interval:interval})
        })
    })
    scheduledTasks = [task]
}

const stopAllTasks = () => {
    scheduledTasks.forEach(task => {
        task.stop()
    })
}

module.exports = {
    createTask
}