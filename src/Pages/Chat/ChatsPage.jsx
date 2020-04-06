import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChatsContext } from '../../context/chatsContext';
import { StoreContext } from '../../context/storeContext';
import { chatService } from '../../Services';
import { ChatMessagesList, MessageInput } from './Components';
import './chat-page.css';

const ChatsPage = () => {
    const { partner } = useParams();
    const { state, dispatch } = useContext(StoreContext);
    const { addChatMessage } = useContext(ChatsContext);

    useEffect(() => {
        dispatch({type: 'SET_CURRENT_CHAT_USER', payload: partner || 'global'});
    }, [partner, dispatch]);

    const sendMessage = (messageContent) => {
        const { username } = state.currentUser;

        const message = {
            type: 'message',
            sender: username,
            timestamp: Date.now(),
            content: messageContent,
            to: partner,
            isMe: true
        };

        chatService.send(message);
        addChatMessage(message);
    };

    return (
        <div className="chat-page">
            <ChatMessagesList />
            <MessageInput onSend={sendMessage} />
        </div>
    );
};

export default ChatsPage;