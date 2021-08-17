import React, {useReducer} from 'react'
import AppRouter from "@components/AppRouter";
import SocketHandler from "@components/SocketHandler";
import {
    ContextSocket,
    socketInitialState
} from "@storage/Socket";
import {
    ContextCryptocurrency,
    cryptocurrencyInitialState,
    cryptocurrencyReducer
} from "@storage/Cryptocurrency";
import {
    connectedInitialState, connectedReducer,
    ContextConnected
} from "@storage/Connected";


const App = () => {
    const [cryptocurrencyState, cryptocurrencyDispatch] = useReducer(cryptocurrencyReducer, cryptocurrencyInitialState)
    const [connectedState, connectedDispatch] = useReducer(connectedReducer, connectedInitialState)

    return (
        <ContextSocket.Provider value={socketInitialState}>
            <ContextCryptocurrency.Provider value={
                {
                    state: cryptocurrencyState,
                    dispatch: cryptocurrencyDispatch
                }
            }>
                <ContextConnected.Provider value={
                    {
                        state: connectedState,
                        dispatch: connectedDispatch
                    }
                }>
                    <SocketHandler>
                        <AppRouter/>
                    </SocketHandler>
                </ContextConnected.Provider>
            </ContextCryptocurrency.Provider>
        </ContextSocket.Provider>
    )
}

export default App;
