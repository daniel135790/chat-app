import React, { useContext } from 'react';
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { SentimentVerySatisfied } from '@material-ui/icons';
import { StoreContext } from '../../context/storeContext';
import StatusIcon from '../StatusIcon';
import './users-list.css';

const UsersList = () => {
    const { state } = useContext(StoreContext);
    const { users } = state;

    return (
        <div className="users-list">
            <h3>Current users</h3>
            <List>
                {users.map(user => (
                    <ListItem
                        disableGutters
                        dense
                        button
                        key={user.id}
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