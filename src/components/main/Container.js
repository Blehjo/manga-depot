import React, { useState, useEffect, useContext } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from "./NavBar";
import SidebarIndex from "./SidebarIndex";
import RoutesIndex from "../routes/RoutesIndex";
import gameData from "../../utils/IGDB";
import axios from "axios";
import moment from "moment";

import { SearchContext } from "../../contexts/search.context";


const Container = (props) => {
    // const [searchField, setSearchField] = useContext(SearchContext);
    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    
    function handleInputChange(evt) {
        evt.preventDefault();
        setValue(evt.target.value);
    };

    function handleClickEvent(evt) {
        evt.preventDefault();
        setShow(!show);
    };

    const handleSearchClick = async (evt) => {
        evt.preventDefault();
        setIsLoading(true);
        setHasError(false);
        try {
            gameData(value)
            .then(response => {
                setResults(response.data);
        })} catch (error) {
            setHasError(true);
            setErrorMessage(error);
            console.error(errorMessage);
        }
        setIsLoading(false);
    };
 
    useEffect(() => {
        const releaseDate = moment(new Date()).subtract(1, 'year').unix();
        axios({
            url: process.env.REACT_APP_URL,
            method: 'POST',
            headers: {
                'x-api-key': process.env.REACT_APP_X_API_KEY,
            },
            data: `fields name, first_release_date, platforms.abbreviation, summary, storyline, rating, cover.image_id; sort rating desc; where rating >= 90 & release_dates.date >= ${releaseDate}; limit 72;`
          })
            .then(response => {
                setResults(response.data);
            })
            .catch(err => {
                setErrorMessage(err);
                console.error(errorMessage);
            });
    }, [errorMessage]);

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
            <div style={{zIndex:1}}className="fixed-top">
                <SidebarIndex show={show}/>
            </div>
            <div className="container-margin">
                <Row className="" key="site-body">
                    <Col className="" key="routes-index">
                        {hasError && <p>Something Went Wrong.</p>}{isLoading ? (<p>Loading...</p>) : <RoutesIndex results={results}/>}
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Container;