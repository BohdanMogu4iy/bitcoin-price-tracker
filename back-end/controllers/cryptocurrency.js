const CryptocurrencyPrice = require('../models').cryptocurrencyPrice
const ScanInterval = require('../models').scanInterval

module.exports = {
    get:  (req, res, next) => {
        ScanInterval.findOne({order: ['createdAt'], attributes: ['interval']})
            .then(data => {
                return data?.interval || 0
            })
            .then(data => {
                return {interval: data}
            })
            .then(({interval}) => {
                return CryptocurrencyPrice.findAll({
                    where: {
                        interval: interval || null,
                        cryptocurrency: req.query['currency']
                    }
                }).then(data => {
                    return {interval: interval || 0, priceData: data}
                })
            })
            .then(data => {
                res.send(data)
            })
    }
}