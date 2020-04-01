import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

const UsersList = () => {
    const { state } = useContext(StoreContext);
    const { users } = state;

    return (
        <div className="users-list">
            {users.map(user => (
                <div key={user.id} className="user">
                    <div>
                        {user.username}
                    </div>
                    <div>
                        {user.status}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UsersList;