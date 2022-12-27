import { useState, Fragment, useContext } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

import { ResultContext } from "../contexts/result.context";
import { GroupResultContext } from "../contexts/groupresult.context";

const SearchBar = () => {
    const [errorMessage, setErrorMessage] = useState([]);
    const [searchField, setSearchField] = useState('');
    const { setResults } = useContext(ResultContext);
    // const { groupResults } = useContext(GroupResultContext);

    const handleInputChange = (evt) => {
        evt.preventDefault();
        setSearchField(evt.target.value);
    };

    const handleClickEvent = async (evt) => {
        evt.preventDefault();

        await axios({
            url: process.env.REACT_APP_URL,
            method: 'POST',
            headers: {
                'x-api-key': process.env.REACT_APP_X_API_KEY,
            },
            mode: 'no-cors',
            data: `fields name, platforms.abbreviation, rating, genres, release_dates, first_release_date, cover.image_id, age_ratings, summary; search "${searchField}"; limit 50;`
        })
        .then(response => {
            setResults(response.data);
        })
        .catch(err => {
            setErrorMessage(err);
            console.error(errorMessage);
        });

        function getAllIndexes(arr, val) {
            var indexes = [], i;
            for(i = 0; i < arr.length; i++)
                if (arr[i].group_name === val)
                    indexes.push(arr[i]);
            return indexes;
        }

        // console.log(groupResults)
        // console.log(getAllIndexes(groupResults, searchField));
    };

    return (
        <Fragment>
            <Form onSubmit={handleClickEvent} style={{ width: '50%', margin: 'auto' }} className="mt-5 d-flex">
                <Form.Control
                    onChange={handleInputChange}
                    type="search"
                    placeholder="Search"
                    className="me-2 "
                    aria-label="Search"
                />
                <Button type="submit" variant="info">Search</Button>
            </Form>
        </Fragment>
    );
}

export default SearchBar;