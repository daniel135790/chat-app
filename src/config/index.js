export default {
    WS_URL: process.env.REACT_APP_WS_URL || 'ws://localhost:8080',
    SERVER_URL: process.env.REACT_APP_SERVER_URL || 'http://localhost:8080',
    AWAY_TIMEOUT: 1000 * 60 * 3
};