import React, {createContext, useContext, useReducer } from "react";
//setup data layer
//needed to track cart items


// This is the Data Layer
export const StateContext = createContext();

//Build Provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={ useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
) 

//How to use it in a component
export const useStateValue = () => useContext(StateContext);