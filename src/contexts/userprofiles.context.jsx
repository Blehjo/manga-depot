import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserProfilesContext = createContext({
    userProfiles: null,
    setUserProfiles: () => null,
});

export const UserProfilesProvider = ({ children }) => {
    const [userProfiles, setUserProfiles] = useState([]);
    const value = { userProfiles, setUserProfiles };

    useEffect(() => {
        const information = async () => {
            await axios.get('/users', {
                mode: 'no-cors'
            })
            .then((response) => setUserProfiles(response.data));
        };

        return information;
    }, []);

    return <UserProfilesContext.Provider value={value} >{children}</UserProfilesContext.Provider>
}