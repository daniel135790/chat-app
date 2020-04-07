import React, { createContext, useReducer } from 'react';
import storeReducer from './storeReducer';
import initialState from './initialState';
import ChatsContextProvider from './chatsContext';

export const StoreContext = createContext();

const { Provider: StoreContxtProvider } = StoreContext;

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(storeReducer, initialState)

    return (
        <StoreContxtProvider value={{ state, dispatch }}>
            <ChatsContextProvider>
                {children}
            </ChatsContextProvider>
        </StoreContxtProvider>
    );
};

export default StoreProvider;
