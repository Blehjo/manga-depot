import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap';

import NavBar from "./NavBar";
import SidebarIndex from "./SidebarIndex";
import RoutesIndex from "../routes/RoutesIndex";

const Container = (props) => {
    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    function handleClickEvent(evt) {
        evt.preventDefault();
        setShow(!show);
    };

    // const handleSearchClick = async (evt) => {
    //     evt.preventDefault();
    //     setIsLoading(true);
    //     setHasError(false);
    //     try {
    //         gameData(value)
    //         .then(response => {
    //             setResults(response.data);
    //             console.log(results)
    //     })} catch (error) {
    //         setHasError(true);
    //         setErrorMessage(error);
    //         console.error(errorMessage);
    //     }
    //     setIsLoading(false);
    // };
 
    // useEffect(() => {
    //     const releaseDate = moment(new Date()).subtract(1, 'year').unix();
    //     axios({
    //         url: process.env.REACT_APP_URL,
    //         method: 'POST',
    //         headers: {
    //             'x-api-key': process.env.REACT_APP_X_API_KEY,
    //         },
    //         data: `fields name, first_release_date, platforms.abbreviation, summary, storyline, rating, cover.image_id; sort rating desc; where rating >= 90 & release_dates.date >= ${releaseDate}; limit 72;`
    //       })
    //         .then(response => {
    //             setResults(response.data);
    //         })
    //         .catch(err => {
    //             setErrorMessage(err);
    //             console.error(errorMessage);
    //         });
    // }, [errorMessage]);

    return (
        <>
            <div style={{zIndex:2}}className="fixed-top">
                <NavBar 
                key={'navbar'}
                onClickEvent={handleClickEvent}
                />
            </div>
            <div style={{zIndex:1}}className="fixed-top">
                <SidebarIndex show={show}/>
            </div>
            <div className="container-margin">
                <Row className="" key="site-body">
                    <Col className="" key="routes-index">
                        {hasError && <p>Something Went Wrong.</p>}{isLoading ? (<p>Loading...</p>) : <RoutesIndex />}
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Container;