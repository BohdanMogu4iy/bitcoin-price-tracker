import React, {useContext} from 'react'
import {ContextCryptocurrency} from "@storage/Cryptocurrency";
import {StyledScanInterval} from "@components/ScanInterval/styled";

const ScanInterval = ({changeHandler}) => {
    const cryptocurrencyContext = useContext(ContextCryptocurrency)

    const onChange = e => {
        changeHandler(e)
    }

    return (
        <StyledScanInterval name="interval" onChange={onChange} value={cryptocurrencyContext.state.interval}>
            <option value="1">1 minute</option>
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
            <option value="1440">1 day</option>
            <option value="0" hidden={cryptocurrencyContext.state.interval !== 0}>Choose Interval</option>
        </StyledScanInterval>
    )
}

export default ScanInterval