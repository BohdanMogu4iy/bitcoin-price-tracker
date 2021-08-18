import {createContext} from "react";
export const ContextConnected = createContext();

export const connectedInitialState = false;

export const connectedReducer = (state, newState) => {
    return newState
}