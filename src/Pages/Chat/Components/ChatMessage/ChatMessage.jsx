import React from 'react';
import { format } from 'date-fns';
import clsx from 'clsx';
import './chat-message.css';

const ChatMessage = ({sender, timestamp, content, isMe}) => (
    <div className={clsx('message', isMe && 'me')} key={timestamp}>
        <div className="sender">
            {sender}
        </div>
        <div className="content">
            {content}
        </div>
        <div className="timestamp">
            {format(new Date(timestamp), 'HH:mm')}
        </div>
    </div>
);

export default ChatMessage;