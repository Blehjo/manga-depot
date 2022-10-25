import { createContext, useState } from 'react';

export const ResultContext = createContext({
    results: [],
    setResults: () => {
        
    },
});

export const ResultProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const value = { results, setResults };

    return <ResultContext.Provider value={value} >{children}</ResultContext.Provider>
}