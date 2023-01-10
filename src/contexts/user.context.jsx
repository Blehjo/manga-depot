import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const information = async () => {
            await axios({
                method: 'get',
                url: 'https://shellgeistapi.herokuapp.com/api/users',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        }
        // setCurrentUser(information);
        // console.log(currentUser);

        // setCurrentUser(information);
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};