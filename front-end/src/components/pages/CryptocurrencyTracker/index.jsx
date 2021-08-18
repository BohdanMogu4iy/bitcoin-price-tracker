import React, {useContext} from 'react'
import ScanInterval from "@components/ScanInterval";
import CryptocurrencyPriceTable from "@components/CryptocurrencyPriceTable";
import {
    ACTIONS,
    ContextCryptocurrency
} from "@storage/Cryptocurrency";
import {ContextSocket} from "@storage/Socket";
import config from "@config/index";
import {ContextConnected} from "@storage/Connected";
import {getCryptocurrencyData} from "@services/cryptocurrencyAPI";
import {
    Container,
    ScanIntervalWrapper,
    StyledPageHead,
    StyledScanIntervalLabel,
    TableWrapper
} from "@pages/CryptocurrencyTracker/styled";


const CryptocurrencyTracker = () => {
    const cryptocurrencyContext = useContext(ContextCryptocurrency)
    const socketContext = useContext(ContextSocket)
    const connectedContext = useContext(ContextConnected)

    const changeHandler = async e => {
        cryptocurrencyContext.dispatch({
            type: ACTIONS.INTERVAL_UPDATE,
            data: e.target.value
        })
        await socketContext.emit(config.SOCKET.events.INTERVAL_UPDATE, {
            interval: e.target.value,
            cryptocurrency: 'bitcoin'
        })
        getCryptocurrencyData({cryptocurrency: 'bitcoin', currency: 'USD'})
        .then(({priceData, interval}) => {
            cryptocurrencyContext.dispatch({
                type: ACTIONS.PRICE_DATA,
                data: {priceData, interval}
            })
        })

    }

    return (
        <Container>
            {
                connectedContext.state ? (
                    <>
                        <StyledPageHead>
                            CryptocurrencyTracker
                        </StyledPageHead>
                        <TableWrapper>
                            <ScanIntervalWrapper>
                                <StyledScanIntervalLabel>Scan Interval</StyledScanIntervalLabel>
                                <ScanInterval
                                    changeHandler={changeHandler}
                                />
                            </ScanIntervalWrapper>
                            <CryptocurrencyPriceTable/>
                        </TableWrapper>

                    </>
                ) : (
                    <StyledPageHead>
                        Connecting....
                    </StyledPageHead>
                )
            }

        </Container>
    )
}

export default CryptocurrencyTracker