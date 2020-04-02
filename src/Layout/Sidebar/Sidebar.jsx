import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemAvatar, ListItemText, ThemeProvider } from '@material-ui/core';
import { Chat as ChatIcon, Home as HomeIcon } from '@material-ui/icons';
import { UsersList } from "../../Components";
import { MyStatus } from '../../Components';
import useStyles from './styles';
import theme from './theme';

const Sidebar = () => {
    const styles = useStyles();
    const history = useHistory();
    const location = useLocation();

    const [selectedItem,
        setSelectedItem] = useState('/home');

    const onItemClick = key => () => {
        setSelectedItem(key);
        history.push(key)
    };

    useEffect(() => {
        setSelectedItem(location.pathname)
    }, [location]);

    return (
        <ThemeProvider theme={theme}>
            <Drawer
                variant="permanent"
                classes={{
                    paper: styles.paper
                }}>
                <MyStatus />
                <List>
                    <ListItem
                        onClick={onItemClick('/home')}
                        selected={selectedItem === '/home' || selectedItem === '/'}
                        button>
                        <ListItemAvatar>
                            <HomeIcon />
                        </ListItemAvatar>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem
                        onClick={onItemClick('/chat')}
                        selected={selectedItem === '/chat'}
                        button>
                        <ListItemAvatar>
                            <ChatIcon />
                        </ListItemAvatar>
                        <ListItemText primary="Chat" />
                    </ListItem>
                </List>
                <UsersList />
            </Drawer>
        </ThemeProvider>
    );
};

export default Sidebar;