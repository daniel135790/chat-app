import React, {createContext, useState} from 'react';

export const UserSettingsContext = createContext();

const UserSettingsProvider = ({children}) => {
    const [userSettings, setUserSettings] = useState(null);

    const applyToSettings = (newSetting) => {
        setUserSettings(prevSettings => ({
            ...prevSettings,
            ...newSetting
        }));
    };

    return (
        <UserSettingsContext.Provider value={{userSettings, applyToSettings}}>
            {children}
        </UserSettingsContext.Provider>
    );
};

export default UserSettingsProvider;