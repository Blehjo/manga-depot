import { useState } from "react";

import { Form, Button, Col } from "react-bootstrap";



const SearchBar = () => {
    const [errorMessage, setErrorMessage] = useState([]);
    const [searchField, setSearchField] = useState('');


    const handleInputChange = (evt) => {
        evt.preventDefault();
        setSearchField(evt.target.value);
    };

    const handleClickEvent = async (evt) => {
        evt.preventDefault();

    };

    return (
        <Col>
            <Form onSubmit={handleClickEvent} className="mt-5 d-flex">
                <Form.Control
                    onChange={handleInputChange}
                    type="search"
                    placeholder="Search"
                    className="me-2 "
                    aria-label="Search"
                />
                <Button type="submit" variant="light">Search</Button>
            </Form>
        </Col>
    );
}

export default SearchBar;