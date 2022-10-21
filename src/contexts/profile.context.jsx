import { createContext, useState } from 'react';

export const ProfileContext = createContext({
    isProfileOpen: false,
    setIsProfileOpen: () => {

    }
});

export const ProfileProvider = ({ children }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const value = { isProfileOpen, setIsProfileOpen };
    return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
}