import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Body from "./Body";
import { Row, Col} from 'react-bootstrap';
import SideBarMenu from "./SideBarMenu";
import axios from "axios";
import token from "../utils/API";
import Genre from "./SidebarAttributes/Genre";

const Container = (props) => {
    const [value, setValue] = useState(props.value);
    const [results, setResults] = useState([]);
    const [item, setToken] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    function handleInputChange(evt) {
        evt.preventDefault();
        setValue(evt.target.value);
    };

    // Method to get search results and set state
    const getToken = async (item) => {
        const response = await token(item);
        setToken(response.data);
    };

    // We want to run this method when the component first loads so that we have images of kittens to display
    // The second argument is the dependency array. This means that this method will only run when the component first loads
    useEffect(() => {
        getToken(item);
    }, []);

    return (
        <>
            <div className="fixed-top">
                <NavBar 
                key={'navbar'}
                onSearchChange={handleInputChange}
                value={value}
                />
            </div>
            <Row className='pt-5'key={1}>
                <Col xs="1" lg="1" key={1}>
                    <div className='sticky-top'>
                        <SideBarMenu/>
                    </div>
                </Col>
                <Col key={2}>
                    <Body results={results}/>
                </Col>
            </Row>
        </>
    )
}

export default Container;