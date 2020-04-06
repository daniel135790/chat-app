import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { SentimentVerySatisfied } from '@material-ui/icons';
import { StoreContext } from '../../context/storeContext';
import StatusIcon from '../StatusIcon';
import './users-list.css';
import { ChatsContext } from '../../context/chatsContext';
import BadgeWrapper from '../BadgeWrapper';

const UsersList = () => {
    const history = useHistory();
    const { state } = useContext(StoreContext);
    const { chats } = useContext(ChatsContext);
    const { users } = state;

    const onUserClick = username => () => history.push(`/chat/${username}`);

    const getChatMessagesWithUser = username => chats[username];

    const getUserBadgeContent = (username) => {
        const chatMessagesWithUser = getChatMessagesWithUser(username);
        if (chatMessagesWithUser) {
            return chatMessagesWithUser.length;
        }

        return 0;
    };

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
                            <BadgeWrapper
                                badgeContent={getUserBadgeContent(user.username)}
                                isVisibleBadge={getChatMessagesWithUser(user.username)}
                                badgeColor="primary"
                            >
                                <SentimentVerySatisfied />
                            </BadgeWrapper>
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