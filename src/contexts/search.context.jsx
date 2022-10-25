import { createContext, useState } from 'react';

export const SearchContext = createContext({
    searchField: '',
    setSearchField: () => {
        
    },
});

export const SearchProvider = ({ children }) => {
    const [searchField, setSearchField] = useState(null);
    const value = { searchField, setSearchField };

    return <SearchContext.Provider value={value} >{children}</SearchContext.Provider>
}