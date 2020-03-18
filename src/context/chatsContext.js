import React, {createContext, useState} from 'react';

export const ChatsContext = createContext();

const ChatsProvider = ({children}) => {
    const [chats,
        setChats] = useState([
        {
            from: 'tom',
            timestamp: Date.now(),
            content: 'helo'
        }, {
            from: 'tom',
            timestamp: Date.now(),
            content: 'helo'
        }, {
            from: 'tom',
            timestamp: Date.now(),
            content: 'helo'
        }
    ]);

    const addChat = (from, timestamp, content) => {
        setChats([
            ...chats, {
                from,
                timestamp,
                content
            }
        ]);
    };

    return (
        <ChatsContext.Provider
            value={{
            chats,
            addChat
        }}>
            {children}
        </ChatsContext.Provider>
    );
};

export default ChatsProvider;