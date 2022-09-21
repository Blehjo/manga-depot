import React, { useState, useEffect } from "react";
import NavBar from "./main/NavBar";
import Body from "./Body";
import { Row, Col} from 'react-bootstrap';
import SideBarMenu from "./main/SideBarMenu";
import axios from "axios";
import token from "../utils/API";
import Genre from "./SidebarAttributes/Genre";
import TournamentCarousel from "./Carousels/TournamentCarousel";
import SidebarOverlay from "./Pieces/SidebarOverlay";

const Container = (props) => {
    const [value, setValue] = useState(props.value);
    const [results, setResults] = useState([]);
    const [accessToken, setToken] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    function handleInputChange(evt) {
        evt.preventDefault();
        setValue(evt.target.value);
    };

    // Method to get search results and set state
    const getToken = async (accessToken) => {
        const response = await token(accessToken);
        setToken(response.data);
    };

    // We want to run this method when the component first loads so that we have images of kittens to display
    // The second argument is the dependency array. This means that this method will only run when the component first loads
    useEffect(() => {
        getToken(accessToken);
    }, []);

    return (
        <>
            <div id="nutty" className="fixed-top">
                <NavBar 
                key={'navbar'}
                onSearchChange={handleInputChange}
                value={value}
                />
            </div>
            <Row className='mw-100'key={1}>
                <Col className=""xs="1" lg="1" key={1}>
                    <SideBarMenu/>
                    <SidebarOverlay/>
                </Col>
                <Col key={2}>
                    <TournamentCarousel/>
                    {/* <Genre 
                        accessToken={accessToken} 
                        value={value}
                    />
                    <Body results={results}/> */}
                </Col>
            </Row>
        </>
    )
}

export default Container;