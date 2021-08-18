import styled from 'styled-components'

export const Container = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding: 0 15px;
    
    @media (max-width: 680px) {
        width: 100%;
    }
    
    @media (max-width: 1040px) {
        width: 100%;
        max-width: 980px;
    }
    @media (min-width: 1040px) and (max-width: 1280px) {
        width: 1020px;
    }
    
    @media (min-width : 1280px) {
        width: 1200px;
    }
`
export const TableWrapper = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding: 0 15px;
    
    @media (max-width: 680px) {
        width: 100%;
    }
    
    @media (max-width: 1040px) {
        width: 100%;
        max-width: 680px;
    }
    @media (min-width: 1040px) and (max-width: 1280px) {
        width: 800px;
    }
    
    @media (min-width : 1280px) {
        width: 1000px;
    }
`
export const ScanIntervalWrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align_items: center;
`

export const StyledScanIntervalLabel = styled.div`
    font-weight: bold;
`

export const StyledPageHead = styled.h1`
    font-weight: bold;
    text-align: center;
    @media (max-width: 680px) {
        font-size: 1rem;
    }
    
    @media (max-width: 1040px) {
        font-size: 1.5rem;
    }
    @media (min-width: 1040px) and (max-width: 1280px) {
        font-size: 2rem;
    }
`