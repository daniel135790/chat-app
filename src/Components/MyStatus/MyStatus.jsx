import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';
import StatusIcon from '../StatusIcon';
import './my-status.css';

const MyStatus = () => {
    const { state } = useContext(StoreContext);
    const { currentUser } = state;
    const { username, status } = currentUser;

    return (
        <div className="my-status" status={status}>
            {username}
            <StatusIcon status={status} />
        </div>
    )
};

export default MyStatus;