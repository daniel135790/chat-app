import React, { createContext, useContext, useCallback, useEffect, useState } from 'react';
import { chatService } from '../Services';
import { StoreContext } from './storeContext';
import config from './../config';

export const ChatsContext = createContext();

const ChatsProvider = ({ children }) => {
    const [chatMessages,
        setChatMessages] = useState([]);

    const { dispatch, state } = useContext(StoreContext);
    const { username } = state;

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

        if (message.type === 'users-list') {
            const { users } = message;
            dispatch({
                type: 'SET_USERS',
                payload: users.map(user => ({
                    id: user.userId,
                    username: user.username,
                    status: user.status
                }))
            });
        }

        if (message.type === 'user-joined') {
            const { username, userId, status } = message;
            dispatch({
                type: 'ADD_USER',
                payload: {
                    username,
                    id: userId,
                    status
                }
            });
        }

        if (message.type === 'user-left') {
            const { userId } = message;
            dispatch({
                type: 'REMOVE_USER',
                payload: userId
            });
        }

        if (message.type === 'user-status-change') {
            const { userId, status } = message;
            dispatch({
                type: 'SET_USER_STATUS',
                payload: {
                    id: userId,
                    status
                }
            });
        }

    }, [addChatMessage, dispatch]);

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