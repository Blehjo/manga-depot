import React, { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import NavBar from "./NavBar";
import SidebarIndex from "./SidebarIndex";
import RoutesIndex from "../routes/RoutesIndex";
import gameData from "../../utils/RAWG";


const Container = (props) => {
    const [value, setValue] = useState(props.value);
    const [show, setShow] = useState(false);
    const [results, setResults] = useState([]);
    const [accessToken, setToken] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    function handleInputChange(evt) {
        evt.preventDefault();
        setValue(evt.target.value);
    };

    function handleClickEvent(evt) {
        evt.preventDefault();
        setShow(!show);
    };

    const getGameData = async (value) => {
        const response = await gameData(value);
        setResults(response);
    }

    // We want to run this method when the component first loads so that we have images of kittens to display
    // The second argument is the dependency array. This means that this method will only run when the component first loads
    useEffect(() => {
        getGameData(value);
    }, []);

    return (
        <>
            <div className="fixed-top">
                <NavBar 
                key={'navbar'}
                onSearchChange={handleInputChange}
                onClickEvent={handleClickEvent}
                value={value}
                />
            </div>
            <Row className="mw-100" key="site-body">
                <Col className=""xs="1" lg="1" key="sidebar-index">
                    <SidebarIndex show={show}/>
                </Col>
                <Col key="routes-index">
                    <RoutesIndex results={results}/>
                </Col>
            </Row>
        </>
    )
}

export default Container;