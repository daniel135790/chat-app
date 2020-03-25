import React, { createContext, useCallback, useEffect, useState } from 'react';
import { chatService } from '../Services';
import config from './../config';

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
            chatService.connect(config.SERVER_URL, null, onMessageReceived);
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