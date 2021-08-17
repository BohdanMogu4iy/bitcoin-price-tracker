import React, {useContext, useEffect, useState} from 'react'
import ScanInterval from "@components/ScanInterval";
import CryptocurrencyPriceTable from "@components/CryptocurrencyPriceTable";
import {
    ACTIONS,
    ContextCryptocurrency
} from "@storage/Cryptocurrency";
import {ContextSocket} from "@storage/Socket";
import config from "@config/index";
import {ContextConnected} from "@storage/Connected";


const CryptocurrencyTracker = () => {
    const cryptocurrencyContext = useContext(ContextCryptocurrency)
    const socketContext = useContext(ContextSocket)
    const connectedContext = useContext(ContextConnected)

    const changeHandler = e => {
        cryptocurrencyContext.dispatch({
            type: ACTIONS.INTERVAL_UPDATE,
            data: e.target.value
        })
        socketContext.emit(config.SOCKET.events.INTERVAL_UPDATE, {interval: e.target.value, currency: 'bitcoin'})
    }

    return (
        <>
            {
                connectedContext.state ? (
                    <>
                        <h1>
                            CryptocurrencyTracker
                        </h1>
                        <div>
                            <div>
                                <p>Scan Interval</p>
                                <ScanInterval
                                    changeHandler={changeHandler}
                                />
                            </div>
                            <CryptocurrencyPriceTable/>
                        </div>
                    </>
                ) : (
                    <h1>
                        Connecting....
                    </h1>
                )
            }

        </>
    )
}

export default CryptocurrencyTracker