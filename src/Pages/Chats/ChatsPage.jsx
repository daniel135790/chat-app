import React from 'react';
import ChatsProvider from '../../context/chatsContext';
import {ChatsList} from '../../Components';

const ChatsPage = ({chats}) => (
    <ChatsProvider>
        <ChatsList />
    </ChatsProvider>
);

export default ChatsPage;