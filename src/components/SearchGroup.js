import { useState, Fragment, useContext, useEffect } from "react";
import axios from "axios";
import { Form, Button, Modal } from "react-bootstrap";

import { ResultContext } from "../contexts/result.context";
import { GroupResultContext } from "../contexts/groupresult.context";
import Groups from "./pages/Groups";

const SearchGroup = () => {
    const [errorMessage, setErrorMessage] = useState([]);
    const [searchField, setSearchField] = useState('');
    const { setResults } = useContext(ResultContext);
    const { groupResults } = useContext(GroupResultContext);
    const [groups, setGroups] = useState({});

    const handleInputChange = (evt) => {
        evt.preventDefault();
        setSearchField(evt.target.value);
    };    

    useEffect(() => {
        async function getGroups() {
            await axios.get(`/groups/`,
            {
                mode: 'no-cors',
            })
            .then((response) => setGroups(response.data));
        }

        getGroups();
    }, []);

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

        console.log(groupResults)
        console.log(getAllIndexes(groupResults, searchField));
    };

    return (
        <Fragment>
            <Modal.Header className="bg-dark" style={{ color: 'white' }} closeButton>
                <Modal.Title>Search for a shell</Modal.Title>
            </Modal.Header>
            <Form className="bg-dark" onSubmit={handleClickEvent} >
                <Modal.Body>
                    <Form.Group
                    className="mb-3"
                    controlId="ControlTextarea"
                    >
                        <Form.Label>Group Name</Form.Label>
                        <Form.Control
                            onChange={handleInputChange}
                            type="search"
                            rows={3}
                            placeholder="Search for shells"
                            aria-label="Search"
                        />
                    </Form.Group>
                </Modal.Body>
                <Groups />
                {/* <Modal.Footer>
                    <Button variant="dark" type="submit">
                        Search
                    </Button>
                </Modal.Footer> */}
            </Form>
        </Fragment>
    );
}

export default SearchGroup;