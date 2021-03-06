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

const disconnect = () => {
    webSocket.close();
    webSocket = null;
};

const updateStatus = (status) => {
    send({
        type: 'user-status-change',
        status
    });
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
    updateStatus,
    onMessageReceived,
    send,
    connect,
    disconnect,
    validateConnected
};