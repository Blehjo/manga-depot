import { createContext, useState } from 'react';

export const UserProfilesContext = createContext({
    userProfiles: [],
    setUserProfiles: () => {},
});

export const UserProfilesProvider = ({ children }) => {
    const [userProfiles, setUserProfiles] = useState([]);
    const value = { userProfiles, setUserProfiles };

    return <UserProfilesContext.Provider value={value} >{children}</UserProfilesContext.Provider>
}