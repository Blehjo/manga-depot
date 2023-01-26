import { useState, Fragment, useEffect } from "react";
import axios from "axios";
import { Form, Button, Modal } from "react-bootstrap";

import Events from "./pages/Events";

const SearchEvent = () => {
    const [errorMessage, setErrorMessage] = useState([]);
    const [searchField, setSearchField] = useState('');


    const [events, setEvents] = useState({});

    const handleInputChange = (evt) => {
        evt.preventDefault();
        setSearchField(evt.target.value);
    };    

    useEffect(() => {
        async function getEvents() {
            await axios.get(`/events/`,
            {
                mode: 'no-cors',
            })
            .then((response) => setEvents(response.data));
        }

        getEvents();
    }, []);

    return (
        <Fragment>
            <Modal.Header className="bg-dark" style={{ color: 'white' }} closeButton>
                <Modal.Title>Search for a shell</Modal.Title>
            </Modal.Header>
            <Form className="bg-dark" onSubmit={handleInputChange} >
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
                <Events />
            </Form>
        </Fragment>
    );
}

export default SearchEvent;