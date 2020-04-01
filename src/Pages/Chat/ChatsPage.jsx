import React, { useContext } from 'react';
import { ChatsContext } from '../../context/chatsContext';
import { StoreContext } from '../../context/storeContext';
import { chatService } from '../../Services';
import { ChatsList, MessageInput } from './Components';
import IdleTimer from 'react-idle-timer'
import './chat-page.css';

const ChatsPage = () => {
    const { state } = useContext(StoreContext);
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

    const onUserAway = () => chatService.updateStatus('away');

    const onUserActive = () => chatService.updateStatus('online');

    return (
        <IdleTimer
            timeout={1000 * 3}
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