import { USER_STATUS } from '../Constants';

const initialState = {
    currentUser: {
        username: null,
        status: USER_STATUS.OFFLINE
    },
    users: []
};

export default initialState;