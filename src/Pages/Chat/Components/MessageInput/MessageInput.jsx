import React, {useState} from 'react';
import {InputBase   , IconButton} from '@material-ui/core';
import {Send} from '@material-ui/icons';
import useStyles from './styles';

const ENTER_KEYCODE = 13;

const MessageInput = ({onSend}) => {
    const [messageText,
        setMessageText] = useState('');

    const classes = useStyles();

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
        <div className="actions-wrapper">
            <div className="actions">
                <InputBase
                    onChange={onTextMessageChange}
                    value={messageText}
                    onKeyDown={onKeyDown}
                    inputProps={{ 'aria-label': 'naked' }}
                    classes={{root: classes.messageTextRoot}} />
                <IconButton
                    classes={{
                    root: classes.sendButtonRoot
                }}
                    variant="contained"
                    color='primary'
                    onClick={innerOnSend}>
                    <Send />
                </IconButton>
            </div>
        </div>
    );
};

export default MessageInput;