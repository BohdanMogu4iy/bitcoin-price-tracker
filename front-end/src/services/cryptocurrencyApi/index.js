import {httpRequest} from "@utils";
import config from "@config"

export const getCryptocurrencyData = ({currency}) => {
    const req = httpRequest(
        {
            url: config.CRYPTOCURRENCY_PRICE_API.endpoints.getPriceData,
            params: {currency},
        }
    )

    return fetch(req)
        .then(response => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }

            return response.json();
        })
}