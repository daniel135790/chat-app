import React, { useContext, useState } from 'react';
import { Button, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';
import useStyles from './styles';
import './user-settings-page.css';

const UserSettingsPage = () => {
    const styles = useStyles();
    const history = useHistory();
    const [username,
        setUsername] = useState('');

    const { dispatch } = useContext(StoreContext);

    const onUsernameChange = e => setUsername(e.target.value);

    const onSave = () => {
        dispatch({ type: 'SET_CURRENT_USER', payload: {username, status: 'online'} });

        history.push('/chat');
    };

    return (
        <div className="user-settings-page">
            Username:
            <TextField
                onChange={onUsernameChange}
                classes={{
                    root: styles.root
                }} />
            <Button onClick={onSave} variant="contained">
                Save
            </Button>
        </div>
    );
};

export default UserSettingsPage;