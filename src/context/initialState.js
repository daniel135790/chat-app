import { USER_STATUS } from '../Constants';

const initialState = {
    currentUser: {
        username: null,
        status: USER_STATUS.OFFLINE
    },
    currentChat: {
        partnerUsername: 'global'
    },
    users: []
};

export default initialState;