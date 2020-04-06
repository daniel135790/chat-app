import React, { useContext } from 'react';
import { ChatsContext } from '../../context/chatsContext';
import { StoreContext } from '../../context/storeContext';
import { chatService } from '../../Services';
import { ChatsList, MessageInput } from './Components';
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

    return (
        <div className="chat-page">
            <ChatsList />
            <MessageInput onSend={sendMessage} />
        </div>
    );
};

export default ChatsPage;