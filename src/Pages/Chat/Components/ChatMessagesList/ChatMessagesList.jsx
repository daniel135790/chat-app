import React, { useContext } from 'react';
import { ChatsContext } from '../../../../context/chatsContext';
import { StoreContext } from '../../../../context/storeContext';
import ChatMessage from '../ChatMessage';
import './chat-messages-list.css';

const ChatMessagesList = () => {
    const { chats } = useContext(ChatsContext);
    const { state } = useContext(StoreContext);
    const { currentChat } = state;
    const chatMessages = chats[currentChat.partnerUsername];

    return (
        <div className="chat-messages-list">
            {
                chatMessages
                    ? chatMessages.map((chatMessage) => (<ChatMessage key={chatMessage.isMe ? Math.random().toString(3) : chatMessage.id} {...chatMessage} />))
                    : 'No Messages'
            }
        </div>
    );
};

export default ChatMessagesList;
