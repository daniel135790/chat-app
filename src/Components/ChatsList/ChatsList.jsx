import React, {useContext} from 'react';
import {ChatsContext} from '../../context/chatsContext';

const ChatsList = () => {
    const {chats} = useContext(ChatsContext);

    return (
        <div>
            {chats.map((chat) => (
                <div key={chat.timestamp}>
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
