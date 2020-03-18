let webSocket = null;

const connect = (addr) => {
    webSocket = new WebSocket(addr);
}

const onConnect = (callback) => {
    if (webSocket === null) {
        return false;
    }

    webSocket.onopen = callback;
    return true;
};

const onDisconnect = (callback) => {
    if (webSocket === null) {
        return false;
    }

    webSocket.onclose = callback;
    return true;
};

const onMessageReceived = (callback) => {
    if (webSocket === null) {
        return false;
    }

    webSocket.onmessage = callback;
    return true;
};

const send = (msg)=> {
    if (webSocket === null) {
        return false;
    }

    webSocket.send(msg);
    return true;
};

export default {
    onConnect, 
    onDisconnect,
    onMessageReceived,
    send,
    connect
};