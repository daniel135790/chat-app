let webSocket = null;

const connect = (addr) => {
    webSocket = new WebSocket(addr);
}

const isConnected = () => webSocket !== null && webSocket.readyState === WebSocket.OPEN;

const onConnect = (callback) => {
    if (isConnected()) {
        return false;
    }

    webSocket.onopen = callback;
    return true;
};

const onDisconnect = (callback) => {
    if (!isConnected) {
        return false;
    }

    webSocket.onclose = callback;
    return true;
};

const onMessageReceived = (callback) => {
    if (!isConnected) {
        return false;
    }

    webSocket.onmessage = event => callback(JSON.parse(event.data));
    return true;
};

const send = (msg) => {
    if (!isConnected) {
        return false;
    }

    webSocket.send(JSON.stringify(msg));
    return true;
};

export default {
    onConnect,
    onDisconnect,
    onMessageReceived,
    send,
    connect
};