import config from '../config';
import { USER_STATUS } from '../Constants';

const isUsernameExist = async (username) => {
    const response = await fetch(`${config.SERVER_URL}/user/${username}`);

    if (response.status !== 404) {
        const resBody = await response.json();
        return resBody.status !== USER_STATUS.OFFLINE;
    }

    return false;
};

const getUsers = async () => {
    const response = await fetch(`${config.SERVER_URL}/users`);
    const resUsers = await response.json();

    return resUsers;
};

export default {
    isUsernameExist,
    getUsers
};
