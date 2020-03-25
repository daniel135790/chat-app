import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { chatService } from '../../Services';
import { UserSettingsContext } from '../../context/userSettingsContext';
import { ChatsContext } from '../../context/chatsContext';
import { ChatsList, MessageInput } from './Components';
import './chat-page.css';

const ChatsPage = () => {
    const {userSettings} = useContext(UserSettingsContext);
    const {addChatMessage} = useContext(ChatsContext);

    const history = useHistory();

    useEffect(() => {
        if (!userSettings || !userSettings.username) {
            history.push('/settings');
        }
    }, [userSettings, history]);

    const SendMessage = (messageContent) => {
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
            <MessageInput onSend={SendMessage} />
        </div>
    );
};

export default ChatsPage;