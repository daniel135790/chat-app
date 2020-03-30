import React, { createContext, useCallback, useEffect, useState } from 'react';
import { chatService } from '../Services';
import config from './../config';

export const ChatsContext = createContext();

const ChatsProvider = ({ children }) => {
    const [chatMessages,
        setChatMessages] = useState([]);

    const addChatMessage = useCallback((message) => {
        setChatMessages(currentChats => [
            ...currentChats,
            message
        ]);
    }, [setChatMessages]);

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
                chats: chatMessages,
                addChatMessage
            }}>
            {children}
        </ChatsContext.Provider>
    );
};

export default ChatsProvider;