const rp = require('request-promise');
const config = require("../../config");

const getPrice = ({slug}) => {
    const requestOptions = {
        method: 'GET',
        uri: config.COIN_MARKET_CAP_API.url,
        qs: {
            'slug': `${slug}`
        },
        headers: config.COIN_MARKET_CAP_API.secretHeaders
    }
    return rp(requestOptions)
        .then(response => {
            return serializeResponse(JSON.parse(response)["data"]["1"])
        })
        .catch(err => {
            console.log(`${JSON.stringify(err)}`)
        })
}

const serializeResponse = responseJSON => {
    return {
        cryptocurrency: responseJSON["slug"],
        price: responseJSON["quote"]["USD"]["price"],
        currency: "USD",
        date: responseJSON["quote"]["USD"]["last_updated"],
    }
}

module.exports = {
    getPrice
}