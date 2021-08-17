import React from 'react'
import ScanInterval from "@components/ScanInterval";
import CryptocurrencyPriceTable from "@components/CryptocurrencyPriceTable";


const CryptocurrencyTracker = () => {
    return (
        <>
            <h1>
                CryptocurrencyTracker
            </h1>
            <div>
                <div>
                    <p>Scan Interval</p>
                    <ScanInterval/>
                </div>
                <CryptocurrencyPriceTable/>
            </div>
        </>
    )
}

export default CryptocurrencyTracker