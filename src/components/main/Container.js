import React, { useState, useEffect, useCallback } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from "./NavBar";
import SidebarIndex from "./SidebarIndex";
import RoutesIndex from "../routes/RoutesIndex";
import gameData from "../../utils/IGDB";


const Container = (props) => {
    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    function handleInputChange(evt) {
        evt.preventDefault();
        setValue(evt.target.value);
    };

    function handleClickEvent(evt) {
        evt.preventDefault();
        setShow(!show);
    };

    function handleSearchClick(evt) {
        console.log('clicked');
        evt.preventDefault();
        gameData(value)
        .then(response => {
            setResults(response.data);
        })
        .catch(err => {
            setErrorMessage(err);
            console.error(errorMessage);
        });
    }

    // We want to run this method when the component first loads so that we have images of games to display
    // The second argument is the dependency array. This means that this method will only run when the component first loads
    // useEffect(() => {
        
    //     gameData(value)
    //         .then(response => {
    //             setResults(response.data);
    //         })
    //         .catch(err => {
    //             setErrorMessage(err);
    //             console.error(errorMessage);
    //         });
    // }, [value]);

    return (
        <>
            <div style={{zIndex:2}}className="fixed-top">
                <NavBar 
                key={'navbar'}
                onSearchChange={handleInputChange}
                onClickEvent={handleClickEvent}
                onSearchClick={handleSearchClick}
                value={value}
                />
            </div>
            <div style={{zIndex:1}}className="fixed-top hidden">
                <SidebarIndex show={show}/>
            </div>
            <Row className="mw-100 pt-5" key="site-body">
                <Col className=""xs="1" lg="1" key="sidebar-index">
                </Col>
                <Col className="m-5 px-5" key="routes-index">
                    <RoutesIndex results={results}/>
                </Col>
            </Row>
        </>
    )
}

export default Container;