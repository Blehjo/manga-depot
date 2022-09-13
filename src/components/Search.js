import { useState, useEffect } from 'react';
import search from '../utils/API';

export default function Search() {
    const [criteria, setCriteria] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [results, setResults] = useState([]);

    const searchGiphy = async (query) => {
        const response = await search(query);
        setResults(response.data.data);
    };

    useEffect(() => {
        searchGiphy(criteria);
    });

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'criteria') {
            setCriteria(inputValue);
            console.log(inputValue)
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!criteria) {
          setErrorMessage('Please input a valid search criteria');
          // We want to exit out of this code block if something is wrong so that the user can correct it
          return;
          // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        }
    
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setCriteria('');
    };

    return (
        <div>
            <form>
                <input 
                    value={criteria}
                    placeholder='Search for Mangas'
                    onChange={handleInputChange}
                    type="criteria"
                    name="criteria"
                />
                <button type="button" onClick={handleFormSubmit}>Clear</button>
            </form>
            {errorMessage && (
                <div>
                <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}