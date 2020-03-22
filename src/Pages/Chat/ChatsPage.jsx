import React from 'react';
import {chatService} from '../../Services';
import ChatsProvider from '../../context/chatsContext';
import {ChatsList, MessageInput} from './Components';
import './chat-page.css';

const ChatsPage = () => {
    const SendMessage = (messageContent) => {
        const message = {
            from: 'Tom',
            timestamp: Date.now(),
            content: messageContent
        };

        chatService.send(message);
    };

    return (
        <div className="chat-page">
            <ChatsProvider>
                <ChatsList />
                <MessageInput onSend={SendMessage} />
            </ChatsProvider>
        </div>
    );
};

export default ChatsPage;