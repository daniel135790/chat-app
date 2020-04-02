import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';
import StatusIcon from '../StatusIcon';
import './users-list.css';

const UsersList = () => {
    const { state } = useContext(StoreContext);
    const { users } = state;

    return (
        <div className="users-list">
            <h3>Current users</h3>
            {users.map(user => (
                <div key={user.id} className="user">
                    <div>
                        {user.username}
                    </div>
                    <StatusIcon status={user.status} />
                </div>
            ))}
        </div>
    );
};

export default UsersList;