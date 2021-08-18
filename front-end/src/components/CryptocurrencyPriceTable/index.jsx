import React, {
    useCallback,
    useContext,
    useReducer
} from 'react'
import {serializeCryptocurrencyData} from "@utils/index";
import {ContextCryptocurrency} from "@storage/Cryptocurrency";
import {
    StyledTable,
    StyledTd,
    StyledTh
} from "@components/CryptocurrencyPriceTable/styled";

const CryptocurrencyPriceTable = () => {
    const cryptocurrencyContext = useContext(ContextCryptocurrency)
    const sortReducer = useCallback((state, action) => {
        const newState = JSON.parse(JSON.stringify(state))
        if (state.column === action.column) {
            newState.direction = (newState.direction === 'DESC') ? 'ASC' : 'DESC'
        }
        newState.column = action.column
        return newState
    }, [])
    const [sort, setSort] = useReducer(sortReducer, {column: 'date', direction: 'DESC'},)
    const onClick = i => {
        setSort({column: i})
    }
    const tableData = [...cryptocurrencyContext.state.priceData]
    tableData.sort((a, b) => {
        if (a[sort.column] < b[sort.column]){
            return sort.direction === 'DESC' ? 1 : -1
        }
        if (a[sort.column] > b[sort.column]){
            return sort.direction === 'DESC' ? -1 : 1
        }
        return 0
    })
    return (
        <StyledTable>
            <thead>
            <tr>
                <StyledTh
                    sort={sort}
                    choosed={sort.column==='date'}
                    onClick={onClick.bind(null, 'date')}
                >Date</StyledTh>
                <StyledTh
                    sort={sort}
                    choosed={sort.column==='price'}
                    onClick={onClick.bind(null, 'price')}
                >Price</StyledTh>
            </tr>
            </thead>
            <tbody>
            {tableData.map(priceData => {
                const data = serializeCryptocurrencyData(priceData)
                return (
                    <tr>
                        <StyledTd>{data.date}</StyledTd>
                        <StyledTd>{data.price}</StyledTd>
                    </tr>
                )
            })}
            </tbody>
        </StyledTable>
    )
}

export default CryptocurrencyPriceTable