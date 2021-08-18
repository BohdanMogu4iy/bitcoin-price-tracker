import styled from 'styled-components'

export const StyledTable = styled.table`
    margin: auto;
    font-size: 14px;
    width: 100%;
`
export const StyledThead = styled.thead`
    position: relative;
    z-index: 120;
`
const thTd = `
    width: 50%;
    padding: 10px 4px;
    font-size: 12px;
    background: white;
    border-top: 1px solid grey;
    &:nth-child(1){
        text-align: left;
        &:after{
            right: 10px;
        }
    }
    &:nth-child(2){
        text-align: right;
        &:after{
            left: 10px;
        }
    }
    
`
export const StyledTh = styled.th`
    ${thTd}
    position: sticky;
    top: 0px;
    z-index: 100;
    cursor: pointer;
    ${props => {
        if (props.choosed){
            return `
                &:after{
                    content: '';
                    width: 0;
                    height: 0;
                    border-style: solid;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    
                    ${props.sort.direction === 'ASC' ? (
                        `
                        border-width: 10px 5px 0 5px;
                        border-color: black transparent transparent transparent;
                        `
                    ) : (
                        `
                        border-width: 0 5px 10px 5px;
                        border-color: transparent transparent black transparent;
                        `
                    )}
                    clear: both;
                }
`
        }   
    }}
`
export const StyledTd = styled.td`
    ${thTd}
    z-index: 99;
`
