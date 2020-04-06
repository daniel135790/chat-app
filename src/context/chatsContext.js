import React, { createContext, useContext, useCallback, useEffect, useState } from 'react';
import { chatService, usersService } from '../Services';
import { StoreContext } from './storeContext';
import config from './../config';

export const ChatsContext = createContext();

const ChatsProvider = ({ children }) => {
    const [openChats,
        setOpenChats] = useState({ global: [] });

    const { dispatch, state } = useContext(StoreContext);
    const { currentUser } = state;
    const { username } = currentUser;

    const addChatMessage = useCallback((message) => {
        let chatPartner;
       
        if (message.isMe) {
            chatPartner = message.to;
        }
        else {
            chatPartner = message.isPersonal
                ? message.sender
                : 'global';
        }

        setOpenChats(currentChats => ({
            ...currentChats,
            [chatPartner]: [
                ...currentChats[chatPartner],
                message
            ]
        }));
    }, [setOpenChats]);

    const openNewChat = useCallback((partnerUsername) => {
        setOpenChats(currentChats => ({
            ...currentChats,
            [partnerUsername]: []
        }));
    }, [setOpenChats]);

    const onMessageReceived = useCallback((message) => {
        switch (message.type) {
            case 'message': {
                addChatMessage({ ...message, isMe: false });
                break
            }
            case 'user-joined': {
                const { username, status } = message;
                openNewChat(username);

                dispatch({
                    type: 'ADD_USER',
                    payload: {
                        username,
                        status
                    }
                });

                break
            }
            case 'user-status-change': {
                const { username, status } = message;

                dispatch({
                    type: 'SET_USER_STATUS',
                    payload: {
                        username,
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
        const onStartup = async () => {
            if (!chatService.validateConnected()) {
                chatService.connect(config.WS_URL, username, null, onMessageReceived);
                const currentUsers = await usersService.getUsers();

                dispatch({ type: 'SET_USERS', payload: currentUsers })
                currentUsers.filter(user => user.username !== username).map(user => user.username).forEach(openNewChat);
            }
        };

        onStartup();

        return () => chatService.disconnect();
    }, [username, addChatMessage, onMessageReceived, openNewChat, dispatch]);

    return (
        <ChatsContext.Provider
            value={{
                chats: openChats,
                addChatMessage
            }}>
            {children}
        </ChatsContext.Provider>
    );
};

export default ChatsProvider;