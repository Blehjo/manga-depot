import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const GroupResultContext = createContext({
    groupResults: null,
    setGroupResults: () => null,
});

export const GroupResultProvider = ({ children }) => {
    const [groupResults, setGroupResults] = useState([]);
    const value = { groupResults, setGroupResults };

    useEffect(() => {
        const information = async () => {
            await axios.get('/groups', {
                mode: 'no-cors'
            })
            .then((resp) => setGroupResults(resp.data));
        };

        return information;
    }, []);

    return <GroupResultContext.Provider value={value} >{children}</GroupResultContext.Provider>
}