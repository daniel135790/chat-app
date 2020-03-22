import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Drawer, ThemeProvider} from '@material-ui/core';
import {List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';
import useStyles from './styles';
import theme from './theme';

const Sidebar = () => {
    const styles = useStyles();
    const history = useHistory();

    const [selectedItem,
        setSelectedItem] = useState('Home');

    const onItemClick = key => () => {
        setSelectedItem(key);
        history.push(key)
    };

    return (
        <ThemeProvider theme={theme}>
            <Drawer
                variant="permanent"
                classes={{
                paper: styles.paper
            }}>
                <List>
                    <ListItem
                        onClick={onItemClick('Home')}
                        selected={selectedItem === 'Home'}
                        button>
                        <ListItemAvatar>
                            <HomeIcon />
                        </ListItemAvatar>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem
                        onClick={onItemClick('Chat')}
                        selected={selectedItem === 'Chat'}
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