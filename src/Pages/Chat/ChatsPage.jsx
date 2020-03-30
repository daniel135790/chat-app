import React, { useContext } from 'react';
import { ChatsContext } from '../../context/chatsContext';
import { UserSettingsContext } from '../../context/userSettingsContext';
import { chatService } from '../../Services';
import { ChatsList, MessageInput } from './Components';
import './chat-page.css';

const ChatsPage = () => {
    const {userSettings} = useContext(UserSettingsContext);
    const {addChatMessage} = useContext(ChatsContext);

    const sendMessage = (messageContent) => {
        const {username} = userSettings;

        const message = {
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