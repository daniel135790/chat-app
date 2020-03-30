import { createMuiTheme } from '@material-ui/core';

const DRAWER_WIDTH = 200;

const theme = createMuiTheme({
    typography: {
        fontSize: 12
    },
    overrides: {
        MuiDrawer: {
            root: {
                width: DRAWER_WIDTH
            },
            paper: {
                width: DRAWER_WIDTH
            }
        },
        MuiListItem: {
            root: {
                "&$selected": {
                    "backgroundColor": "#12191de3"
                }
            },
            button: {
                '&:hover': {
                    backgroundColor: '#32414a'
                }
            }
        },
        MuiSvgIcon: {
            root: {
                color: "#b9b9b9"
            }
        }
    }
});

export default theme;