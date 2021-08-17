import React from 'react'
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";
import CryptocurrencyTracker from "../pages/CryptocurrencyTracker";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <CryptocurrencyTracker/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter