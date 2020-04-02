import React from 'react';
import ChatsProvider from '../../context/chatsContext';
import ChatsPage from './ChatsPage';

const ChatsPageProviderWrapper = () => (
    <ChatsProvider>
        <ChatsPage />
    </ChatsProvider>
);

export default ChatsPageProviderWrapper;