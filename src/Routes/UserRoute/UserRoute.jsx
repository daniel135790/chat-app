import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router';
import { StoreContext } from '../../context/storeContext';

const UserRoute = ({ component: Component, ...rest }) => {
    const { state } = useContext(StoreContext);

    return (
        <Route {...rest} render={(props) => (
            (state.currentUser.username)
                ? <Component {...props} />
                : <Redirect to="/settings" />
        )} />
    );
};

export default UserRoute;