import React, {useContext} from 'react';
import {ChatsContext} from '../../../../context/chatsContext';
import './chats-list.css';

const ChatsList = () => {
    const {chats} = useContext(ChatsContext);

    return (
        <div className="chats-list">
            {chats.map((chat) => (
                <div className="message" key={chat.timestamp}>
                    <div>
                        {chat.from}
                    </div>
                    <div>
                        {chat.timestamp}
                    </div>
                    <div>
                        {chat.content}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatsList;
