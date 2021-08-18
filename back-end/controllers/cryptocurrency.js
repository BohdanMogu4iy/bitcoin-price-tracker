const CryptocurrencyPrice = require('../models').cryptocurrencyPrice
const ScanInterval = require('../models').scanInterval

module.exports = {
    get:  (req, res, next) => {
        if (!req.query['cryptocurrency'] || !req.query['currency']){
            res.sendStatus(400)
            return
        }
        ScanInterval.findOne({order: [['createdAt', 'DESC']], attributes: ['interval']})
            .then(data => {
                return data?.interval || null
            })
            .then(data => {
                return {interval: data}
            })
            .then(({interval}) => {
                return CryptocurrencyPrice.findAll({
                    where: {
                        interval: interval,
                        cryptocurrency: req.query['cryptocurrency'],
                        currency: req.query['currency']
                    },
                    attributes: ['interval', 'price', 'currency', 'cryptocurrency', 'date']
                }).then(data => {
                    return {interval: interval || 0, priceData: data}
                })
            })
            .then(data => {
                res.send(data)
            })
    }
}