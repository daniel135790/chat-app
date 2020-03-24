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

    const onMessageReceived = message => addChatMessage({
        ...message,
        isMe: false
    });

    useEffect(() => {
        if (!chatService.validateConnected()) {
            chatService.connect('ws://localhost:8080', null, onMessageReceived);
        }

        return () => chatService.disconnect();
    }, [addChatMessage]);

    return (
        <ChatsContext.Provider
            value={{
            chats,
            addChatMessage
        }}>
            {children}
        </ChatsContext.Provider>
    );
};

export default ChatsProvider;