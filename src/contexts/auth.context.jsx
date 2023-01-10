import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext({
    setAuth: () => null,
    auth: null,
});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    const value = { auth, setAuth };

    useEffect(() => {
        const information = async () => {
            await axios({
                method: 'get',
                url: 'https://shellgeist.herokuapp.com/api/users/',
                headers: {
                  'Content-Type': 'application/json',
                },
                withCredentials: false,
            })
            .then(function (response) {
                setAuth(response.data.user)
            })
        };

        return information;
    }, []);


    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
};