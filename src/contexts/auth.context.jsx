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
            await axios.get('/api/users/', {
                mode: 'no-cors'
            })
            .then((response) => setAuth(response.data));
        };

        return information;
    }, []);


    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
};