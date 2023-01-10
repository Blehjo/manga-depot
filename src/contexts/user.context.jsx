import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

// import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

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
                withCredentials: false,
            })
            .then(function (response) {
                console.log(response.data.user)
            });
        }

        return information;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};