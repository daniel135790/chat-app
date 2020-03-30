import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router';
import { UserSettingsContext } from '../../context/userSettingsContext';

const UserRoute = ({ component: Component, ...rest }) => {
    const { userSettings } = useContext(UserSettingsContext);

    return (
        <Route {...rest} render={(props) => (
            (userSettings && userSettings.username)
                ? <Component {...props} />
                : <Redirect to="/settings" />
        )} />
    );
};

export default UserRoute;