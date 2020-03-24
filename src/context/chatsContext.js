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

    const onMessageReceived = useCallback((message) => {
        addChatMessage({
            ...message,
            isMe: false
        });
    }, [addChatMessage]);

    useEffect(() => {
        if (!chatService.validateConnected()) {
            chatService.connect('ws://ds-chat2-server.herokuapp.com:8080', null, onMessageReceived);
        }

        return () => chatService.disconnect();
    }, [addChatMessage, onMessageReceived]);

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