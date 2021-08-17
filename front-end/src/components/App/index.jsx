import React from 'react'
import AppRouter from "@components/AppRouter";
import SocketHandler from "@components/SocketHandler";
import {ContextSocket, socketInitialState} from "@storage/Socket";



const App = () => {
    return (
        <ContextSocket.Provider value={socketInitialState}>
            <SocketHandler>
                <AppRouter/>
            </SocketHandler>
        </ContextSocket.Provider>
    )
}

export default App;
