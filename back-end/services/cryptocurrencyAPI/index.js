const rp = require('request-promise');
const config = require("../../config");

const getPrice = ({slug}) => {
    const requestOptions = {
        method: 'GET',
        uri: config.COIN_MARKET_CAP_API.url,
        qs: {
            'start': '1',
            'limit': '5000',
            'convert': 'USD',
            'slug': slug
        },
        headers: config.COIN_MARKET_CAP_API.secretHeaders,
        json: true,
        gzip: true
    }
    return rp(requestOptions)
        .then(response => {
            return serializeResponse(JSON.stringify(response))
        })
        .catch(err => {
            console.log(`api request error ${JSON.stringify(err)}`)
        })
}

const serializeResponse = responseJSON => {
    return {
        currency: responseJSON.slug,
        date: responseJSON.last_updated,
        price: responseJSON.quote.USD.price
    }
}

module.exports = {
    getPrice
}