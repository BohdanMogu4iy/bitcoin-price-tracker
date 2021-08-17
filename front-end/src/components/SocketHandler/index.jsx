import React, {useContext, useEffect} from 'react'
import config from "@config"
import {ContextSocket} from "@storage/Socket";
import {
    ACTIONS,
    ContextCryptocurrency
} from "@storage/Cryptocurrency";
import {ContextConnected} from "@storage/Connected";
import {httpRequest} from "@utils/index";
import {getCryptocurrencyData} from "@services/cryptocurrencyApi";


const SocketHandler = ({children}) => {
    const socketsContext = useContext(ContextSocket)
    const cryptocurrencyContext = useContext(ContextCryptocurrency)
    const connectedContext = useContext(ContextConnected)

    const intervalNewHandler = async ({interval}) => {
        cryptocurrencyContext.dispatch({
            type: ACTIONS.INTERVAL_UPDATE,
            data: {interval}
        })
    }

    const priceUpdateHandler = async ({priceData}) => {
        cryptocurrencyContext.dispatch({
            type: ACTIONS.PRICE_UPDATE,
            data: {priceData}
        })
    }

    const connectedHandler = async () => {
        await getCryptocurrencyData({currency: 'bitcoin'})
            .then(({priceData, interval}) => {
                cryptocurrencyContext.dispatch({
                    type: ACTIONS.PRICE_DATA,
                    data: {priceData, interval}
                })
                console.log({priceData, interval})
            })
            .then(() => {
                connectedContext.dispatch()
            })
    }

    const connectErrorHandler = async () => {
        connectedContext.dispatch()
    }

    useEffect(() => {
        socketsContext.on(config.SOCKET.events.INTERVAL_NEW, intervalNewHandler)
        socketsContext.on(config.SOCKET.events.PRICE_UPDATE, priceUpdateHandler)
        socketsContext.on(config.SOCKET.events.CONNECTED, connectedHandler)
        socketsContext.on(config.SOCKET.events.CONNECT_ERROR, connectErrorHandler);

        return () => {
            socketsContext.removeEventListener(config.SOCKET.events.INTERVAL_NEW, intervalNewHandler)
            socketsContext.removeEventListener(config.SOCKET.events.PRICE_UPDATE, priceUpdateHandler)
            socketsContext.removeEventListener(config.SOCKET.events.CONNECTED, connectedHandler)
            socketsContext.removeEventListener(config.SOCKET.events.CONNECT_ERROR, connectErrorHandler);

        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default SocketHandler