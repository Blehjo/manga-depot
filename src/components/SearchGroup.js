import { useState, Fragment, useEffect } from "react";
import axios from "axios";
import { Form, Button, Modal } from "react-bootstrap";

import Groups from "./pages/Groups";

const SearchGroup = () => {
    const [errorMessage, setErrorMessage] = useState([]);
    const [searchField, setSearchField] = useState('');

    const [groups, setGroups] = useState({});

    const handleInputChange = (evt) => {
        evt.preventDefault();
        setSearchField(evt.target.value);
    };    

    useEffect(() => {
        async function getGroups() {
            await axios({
                method: 'get',
                url: `https://shellgeistapi.herokuapp.com/groups/`
            })
            .then((response) => setGroups(response.data));
        }

        getGroups();
    }, []);

    const handleClickEvent = async (evt) => {
        evt.preventDefault();
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
                    <Button style={{ width: '100%' }} variant="light" type="submit">
                        Search
                    </Button>
                </Modal.Body>
                <Groups />
            </Form>
        </Fragment>
    );
}

export default SearchGroup;