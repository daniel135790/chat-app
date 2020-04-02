import React, { createContext, useContext, useCallback, useEffect, useState } from 'react';
import { chatService } from '../Services';
import { StoreContext } from './storeContext';
import config from './../config';

export const ChatsContext = createContext();

const ChatsProvider = ({ children }) => {
    const [chatMessages,
        setChatMessages] = useState([]);

    const { dispatch, state } = useContext(StoreContext);
    const { currentUser } = state;
    const { username } = currentUser;

    const addChatMessage = useCallback((message) => {
        setChatMessages(currentChats => [
            ...currentChats,
            message
        ]);
    }, [setChatMessages]);

    const onMessageReceived = useCallback((message) => {
        switch (message.type) {
            case 'message': {
                addChatMessage({ ...message, isMe: false });
                break
            }
            case 'users-list': {
                const { users: rawUsers } = message;
                const users = rawUsers.map(user => ({
                    id: user.userId,
                    username: user.username,
                    status: user.status
                }));

                dispatch({ type: 'SET_USERS', payload: users });
                break
            }
            case 'user-joined': {
                const { username, userId, status } = message;

                dispatch({
                    type: 'ADD_USER',
                    payload: {
                        username,
                        id: userId,
                        status
                    }
                });

                break
            }
            case 'user-left': {
                const { userId } = message;
                dispatch({ type: 'REMOVE_USER', payload: userId });

                break;
            }

            case 'user-status-change': {
                const { userId, status } = message;
                
                dispatch({
                    type: 'SET_USER_STATUS',
                    payload: {
                        id: userId,
                        status
                    }
                });

                break;
            }
            default:
                break;
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