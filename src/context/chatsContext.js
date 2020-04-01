import React, { createContext, useContext, useCallback, useEffect, useState } from 'react';
import { chatService } from '../Services';
import { UserSettingsContext } from './userSettingsContext';
import config from './../config';

export const ChatsContext = createContext();

const ChatsProvider = ({ children }) => {
    const [chatMessages,
        setChatMessages] = useState([]);

    const {userSettings} = useContext(UserSettingsContext);
    const {username} = userSettings;

    const addChatMessage = useCallback((message) => {
        setChatMessages(currentChats => [
            ...currentChats,
            message
        ]);
    }, [setChatMessages]);

    const onMessageReceived = useCallback((message) => {
        if (message.type === 'message') {
            addChatMessage({
                ...message,
                isMe: false
            });
        }

        if (message.type === 'new-user') {
            console.log('new user: ' + message.username)
        }
    }, [addChatMessage]);

    useEffect(() => {
        if (!chatService.validateConnected()) {
            chatService.connect(config.SERVER_URL, username, null, onMessageReceived);
        }

        return () => chatService.disconnect();
    }, [username, addChatMessage, onMessageReceived]);

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