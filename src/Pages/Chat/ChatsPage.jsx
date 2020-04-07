import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChatsContext } from '../../context/chatsContext';
import { StoreContext } from '../../context/storeContext';
import storeSelectors from '../../context/chatSelectors';
import { chatService } from '../../Services';
import { ChatMessagesList, MessageInput } from './Components';
import './chat-page.css';

const ChatsPage = () => {
    const { partner: partnerParam } = useParams();
    const { state, dispatch } = useContext(StoreContext);
    const { addChatMessage, setChatMessagesRead, chats } = useContext(ChatsContext);
    
    const partner = partnerParam || 'global';
    const chatMessagesCount = storeSelectors.getChatMessagesCount({chats, username: partner});

    useEffect(() => {
        dispatch({ type: 'SET_CURRENT_CHAT_USER', payload: partner });
    }, [partner, dispatch]);

    useEffect(() => {
        setChatMessagesRead(partner, true);
    }, [setChatMessagesRead, partner, chatMessagesCount]);


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