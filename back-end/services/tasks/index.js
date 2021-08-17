const cron = require('node-cron')
const {updatePrice} = require("../../utils");
const config = require("../../config")

let scheduledTasks = []

const createTask = ({interval, currency, socket}) => {
    console.log('---------------------');
    stopAllTasks()
    console.log(`Running Cron Job in a ${interval} minutes`);
    scheduledTasks = [`${interval}`]
}

const stopAllTasks = () => {
    scheduledTasks.forEach(task => {
        console.log(`delete task scheduled to ${task} minutes`)
    })
}

module.exports = {
    createTask
}