import React, { createContext, useReducer } from 'react';
import storeReducer from './storeReducer';
import initialState from './initalState';

export const StoreContext = createContext();

const { Provider } = StoreContext;

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(storeReducer, initialState)

    return (
        <Provider value={{ state, dispatch }}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
