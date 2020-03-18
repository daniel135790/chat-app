import React from 'react';
import {Drawer, ThemeProvider} from '@material-ui/core';
import {List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import useStyles from './styles';
import theme from './theme';

const Sidebar = () => {
    const styles = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Drawer
                variant="permanent"
                classes={{
                paper: styles.paper
            }}>
                <List>
                    <ListItem selected button key={1}>
                        <ListItemAvatar>
                            <ChatIcon />
                        </ListItemAvatar>
                        <ListItemText primary="Chat" />
                    </ListItem>
                    <ListItem button key={2}>
                        <ListItemAvatar>
                            <ChatIcon />
                        </ListItemAvatar>
                        <ListItemText primary="Chat" />
                    </ListItem>
                    <ListItem button key={3}>
                        <ListItemAvatar>
                            <ChatIcon />
                        </ListItemAvatar>
                        <ListItemText primary="Chat" />
                    </ListItem>
                </List>
            </Drawer>
        </ThemeProvider>
    );
}

export default Sidebar;