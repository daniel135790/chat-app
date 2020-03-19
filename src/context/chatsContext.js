import React, {createContext, useState, useEffect, useCallback} from 'react';
import {chatService} from '../Services';

export const ChatsContext = createContext();

const ChatsProvider = ({children}) => {
    const [chats,
        setChats] = useState([]);

    const addChat = useCallback((message) => {
        setChats([
            ...chats,
            message
        ]);
    }, [chats, setChats]);

    useEffect(() => {
        chatService.connect('ws://localhost:8080');
        chatService.onMessageReceived(addChat);
    }, [addChat]);

    return (
        <ChatsContext.Provider
            value={{
            chats,
            addChat
        }}>
            {children}
        </ChatsContext.Provider>
    );
};

export default ChatsProvider;