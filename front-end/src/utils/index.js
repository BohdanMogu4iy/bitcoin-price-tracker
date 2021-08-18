export const httpRequest = ({url, method = "GET", params = null, data = null}) => {
    let requestUrl = new URL(url)
    if (params){
        Object.keys(params).forEach(key => requestUrl.searchParams.append(key, params[key]))

    }

    const requestOptions = {
        headers: new Headers({ Accept: 'application/json' }),
    };


    const requestData = {}
    if (data) {
        requestData.body.set(data)
    }
    return new Request(requestUrl, {
        method: method,
        ...requestData,
        ...requestOptions
    });
};

export const serializeCryptocurrencyData = ({date, price, currency}) => {
    return {
        price: `${price} ${currency}`,
        date
    }
}