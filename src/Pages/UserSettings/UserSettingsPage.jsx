import React, { useContext, useState } from 'react';
import { Button, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';
import { usersService } from '../../Services';
import useStyles from './styles';
import './user-settings-page.css';

const UserSettingsPage = () => {
    const styles = useStyles();
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);

    const { dispatch } = useContext(StoreContext);

    const onUsernameChange = e => setUsername(e.target.value);

    const onSave = async () => {
        const usernameExists = await usersService.isUsernameExist(username);

        if (!usernameExists) {
            dispatch({ type: 'SET_CURRENT_USER', payload: { username, status: 'online' } });
            history.push('/chat');
        }
        else {
            setError('Username already exists');
        }
    };

    return (
        <div className="user-settings-page">
            <div>
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
            {
                error
                    ? <div>{error}</div>
                    : null
            }
        </div>
    );
};

export default UserSettingsPage;