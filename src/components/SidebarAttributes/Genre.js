import React from "react";
import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import axios from "axios";


const Genre = (props) => {
    const [results, setResults] = useState([]);
    console.log(props)

    axios({
        url: "https://7ljxegp370.execute-api.us-west-2.amazonaws.com//production/v4/games",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': process.env.REACT_APP_CLIENT_ID,
            'Authorization': `Bearer 246l3iixlivbzecoupit5kkvsdmklc`,
        },
        data: "fields name, cover.url, summary;",
    })
        .then(response => {
            setResults(response.data);
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });

    // return (
    //     <>
    //         <Row xs={1} sm={2} md={3} lg={5}className="g-4 pt-3" key={1}>
    //             {props.results.map((result) => (
    //             <Col className='' key={result._id}>
    //                 <Card key={result._id}>
    //                     <Card.Body>
    //                         <Card.Title>{result}</Card.Title>
    //                     </Card.Body>
    //                 </Card>
    //             </Col>
    //             ))}
    //         </Row>
    //     </>
    // )
}

export default Genre;