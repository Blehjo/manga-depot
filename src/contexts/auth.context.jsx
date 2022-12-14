import { createContext, useState } from 'react';

export const AuthContext = createContext({
    auth: {},
    setAuth: () => {},
});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const value = { auth, setAuth };

    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
}