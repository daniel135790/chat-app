import React, {useState} from 'react';
import {TextField, Button} from '@material-ui/core';

const ENTER_KEYCODE = 13;

const MessageInput = ({onSend}) => {
    const [messageText,
        setMessageText] = useState('');

    const onTextMessageChange = event => setMessageText(event.target.value);

    const onKeyDown = (e) => {
        if (e.keyCode === ENTER_KEYCODE) {
            innerOnSend();
        }
    }

    const innerOnSend = () => {
        onSend(messageText);
        setMessageText('');
    }

    return (
        <div className="actions">
            <TextField
                multiline
                onChange={onTextMessageChange}
                value={messageText}
                onKeyDown={onKeyDown} />
            <Button variant="contained" color='primary' onClick={innerOnSend}>
                Send
            </Button>
        </div>
    );
};

export default MessageInput;