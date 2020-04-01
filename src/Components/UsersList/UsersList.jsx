import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

const UsersList = () => {
    const { state } = useContext(StoreContext);
    const { users } = state;

    return (
        <div className="users-list">
            {users.map(user => (
                <div>
                    {user.username}
                </div>
            ))}
        </div>
    );
};

export default UsersList;