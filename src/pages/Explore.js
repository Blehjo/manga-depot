import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Row } from "react-bootstrap";


const Explore = () => {
    const [errorMessage, setErrorMessage] = useState();
    const [results, setResults] = useState();
    useEffect(() => {
        axios({
            url: "https://5f5gh8905l.execute-api.us-west-2.amazonaws.com/production/v4/genres",
            method: 'POST',
            headers: {
                'x-api-key': process.env.REACT_APP_X_API_KEY,
            },
            data: `fields name; limit 50;`
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
            <h1>Explore</h1>
            <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4 pt-3" key="genres">
                {results?.map((result) => (
                    <Col key={result.id}>
                        <Card className=" bg-dark text-white h-100" key={result.id}>
                            <Card.Body className="genre-card">
                                <Card.Title>
                                    <Card.Link className="genre-card card-info"href={`/genre/${result.name}`}>
                                        {result.name}
                                    </Card.Link>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Explore;