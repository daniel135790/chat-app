import React, {useState, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {Drawer, ThemeProvider} from '@material-ui/core';
import {List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';
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
            </Drawer>
        </ThemeProvider>
    );
}

export default Sidebar;