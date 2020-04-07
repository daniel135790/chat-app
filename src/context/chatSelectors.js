import { createSelector } from 'reselect'

const chatMessages = ({ chats, username }) => {
    return chats[username]
};

const getChatMessagesCount = createSelector(chatMessages, (chatMessages) => {
    return chatMessages.length;
});

export default {
    getChatMessagesCount
}