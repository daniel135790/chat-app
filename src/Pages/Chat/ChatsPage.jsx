import React, { useContext } from 'react';
import { ChatsContext } from '../../context/chatsContext';
import { StoreContext } from '../../context/storeContext';
import { chatService } from '../../Services';
import { ChatsList, MessageInput } from './Components';
import { USER_STATUS } from '../../Constants';
import IdleTimer from 'react-idle-timer'
import config from '../../config';
import './chat-page.css';

const ChatsPage = () => {
    const { state, dispatch } = useContext(StoreContext);
    const { addChatMessage } = useContext(ChatsContext);

    const sendMessage = (messageContent) => {
        const { username } = state;

        const message = {
            type: 'message',
            sender: username,
            timestamp: Date.now(),
            content: messageContent,
            isMe: true
        };

        chatService.send(message);
        addChatMessage(message);
    };

    const onUserAway = () => {
        dispatch({
            type: 'SET_CURRENT_USER',
            payload: {
                ...state.currentUser,
                status: USER_STATUS.AWAY
            }
        });

        chatService.updateStatus(USER_STATUS.AWAY);
    };

    const onUserActive = () => {
        dispatch({
            type: 'SET_CURRENT_USER',
            payload: {
                ...state.currentUser,
                status: USER_STATUS.ONLINE
            }
        });

        chatService.updateStatus(USER_STATUS.ONLINE);
    }

    return (
        <IdleTimer
            timeout={config.AWAY_TIMEOUT}
            onIdle={onUserAway}
            onActive={onUserActive}
        >
            <div className="chat-page">
                <ChatsList />
                <MessageInput onSend={sendMessage} />
            </div>
        </IdleTimer>
    );
};

export default ChatsPage;