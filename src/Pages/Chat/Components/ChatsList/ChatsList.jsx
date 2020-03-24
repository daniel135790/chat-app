import React, {useContext} from 'react';
import {ChatsContext} from '../../../../context/chatsContext';
import ChatMessage from '../ChatMessage';
import './chats-list.css';

const ChatsList = () => {
    const {chats} = useContext(ChatsContext);

    return (
        <div className="chats-list">
            {chats.map((chatMessage) => (<ChatMessage key={chatMessage.id} {...chatMessage} />))}
        </div>
    );
};

export default ChatsList;
