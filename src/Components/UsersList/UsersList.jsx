import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { SentimentVerySatisfied } from '@material-ui/icons';
import { StoreContext } from '../../context/storeContext';
import StatusIcon from '../StatusIcon';
import './users-list.css';

const UsersList = () => {
    const history = useHistory();
    const { state } = useContext(StoreContext);
    const { users } = state;

    const onUserClick = username => () => history.push(`/chat/${username}`)

    return (
        <div className="users-list">
            <h3>Current users</h3>
            <List>
                {users.map(user => (
                    <ListItem   
                        disableGutters
                        dense
                        button
                        key={user.username}
                        onClick={onUserClick(user.username)}
                    >
                        <ListItemAvatar>
                            <SentimentVerySatisfied />
                        </ListItemAvatar>
                        <ListItemText primary={user.username} />
                        <StatusIcon status={user.status} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default UsersList;