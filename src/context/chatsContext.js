import React, {createContext, useState, useEffect, useCallback} from 'react';
import {chatService} from '../Services';

export const ChatsContext = createContext();

const ChatsProvider = ({children}) => {
    const [chats,
        setChats] = useState([]);

    const addChatMessage = useCallback((message) => {
        setChats(currentChats => [
            ...currentChats,
            message
        ]);
    }, [setChats]);

    useEffect(() => {
        if (!chatService.validateConnected()) {
            chatService.connect('ws://localhost:8080', null, addChatMessage);
        }
    }, [addChatMessage]);

    return (
        <ChatsContext.Provider
            value={{
            chats
        }}>
            {children}
        </ChatsContext.Provider>
    );
};

export default ChatsProvider;