import React, {useRef} from 'react';
import {chatService} from '../../Services';
import ChatsProvider from '../../context/chatsContext';
import {ChatsList} from '../../Components';

const ChatsPage = ({chats}) => {
    const messageTextArea = useRef();

    const SendMessage = () => {
        const message = {
            from : 'Tom',
            timestamp: Date.now(),
            content: messageTextArea.current.value
        };

        chatService.send(message);
    };

    return (
        <ChatsProvider>
            <ChatsList />
            <textarea ref={messageTextArea} />
            <button onClick={SendMessage}>
                Send
            </button>
        </ChatsProvider>
    );
};

export default ChatsPage;