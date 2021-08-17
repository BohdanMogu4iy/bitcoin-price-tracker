import {createContext} from "react";
export const ContextCryptocurrency = createContext()

export const ACTIONS = {
    INTERVAL_UPDATE: "INTERVAL_UPDATE",
    PRICE_UPDATE: "PRICE_UPDATE",
    PRICE_DATA: "PRICE_DATA"
}

export const cryptocurrencyInitialState = {
    interval: 0,
    priceData: []
};

export const cryptocurrencyReducer = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch(action.type) {
        case ACTIONS.INTERVAL_UPDATE:
            newState.interval = action.data.interval
            return newState
        case ACTIONS.PRICE_UPDATE:
            newState.priceData.push(action.data.priceData)
            return newState
        case ACTIONS.PRICE_DATA:
            newState.interval = action.data.interval
            newState.priceData = action.data.priceData
            return newState
        default:
            return newState
    }
}
