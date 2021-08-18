import {httpRequest} from "@utils";
import config from "@config"

export const getCryptocurrencyData = ({cryptocurrency, currency}) => {
    const req = httpRequest(
        {
            url: config.CRYPTOCURRENCY_PRICE_API.endpoints.getPriceData,
            params: {cryptocurrency, currency},
        }
    )

    return fetch(req)
        .then(response => {
            if (response.status < 200 || response.status >= 400) {
                throw new Error(response.statusText);
            }

            return response.json();
        })
}