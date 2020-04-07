import React, { useContext } from 'react';
import IdleTimer from 'react-idle-timer'
import { chatService } from '../../Services';
import { StoreContext } from '../../context/storeContext';
import { USER_STATUS } from '../../Constants';

const UserActivityWrapper = ({ children, timeout }) => {
    const { state, dispatch } = useContext(StoreContext);

    const onUserAway = () => {
        dispatch({
            type: 'SET_CURRENT_USER',
            payload: {
                ...state.currentUser,
                status: USER_STATUS.AWAY
            }
        });

        chatService.updateStatus(USER_STATUS.AWAY);
    };

    const onUserActive = () => {
        dispatch({
            type: 'SET_CURRENT_USER',
            payload: {
                ...state.currentUser,
                status: USER_STATUS.ONLINE
            }
        });

        chatService.updateStatus(USER_STATUS.ONLINE);
    }

    return (
        <IdleTimer
            timeout={timeout}
            onIdle={onUserAway}
            onActive={onUserActive}
        >
            {children}
        </IdleTimer>

    );
};

export default UserActivityWrapper;