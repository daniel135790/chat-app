let webSocket = null;

const connect = (addr, username, onConnect, onMessage) => {
    webSocket = new WebSocket(addr);
    onConnected(() => {
        send({ type: 'user-connect', username });

        if (onConnect) {
            onConnect();
        }
    });
    onMessageReceived(onMessage);
};

const disconnect = (username) => {
    webSocket.close();
    webSocket = null;
};

const validateConnected = () => webSocket !== null && webSocket.readyState === WebSocket.OPEN;

const onConnected = (callback) => {
    if (webSocket === null) {
        return false;
    }

    webSocket.onopen = callback;
    return true;
};

const onDisconnect = (callback) => {
    if (!validateConnected()) {
        return false;
    }

    webSocket.onclose = callback;
    return true;
};

const onMessageReceived = (callback) => {
    if (webSocket === null) {
        return false;
    }

    webSocket.onmessage = event => callback(JSON.parse(event.data));
    return true;
};

const send = (msg) => {
    if (!validateConnected()) {
        return false;
    }

    webSocket.send(JSON.stringify(msg));
    return true;
};

export default {
    onConnected,
    onDisconnect,
    onMessageReceived,
    send,
    connect,
    disconnect,
    validateConnected
};