import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCommentAlt, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons';
import { utcConverter } from "../../utils/date/Date";

const Interactions = () => {
    const [posts, setPosts] = useState([]);
    function getPosts() {
        axios.get(`/interactions/`,
        {
            mode: 'no-cors',
        })
        .then((response) => setPosts(response.data));
    }

    useEffect(() => {
        getPosts();
    }, []);

    console.log(posts);
    return (
        <Fragment>
            <Row xs={1} sm={1} md={1} lg={1} xl={1} className=" g-4 pt-3" key="groups">
                <Col >
                    <h1 style={{ color: 'white'}}>Interactions</h1>
                    {Array.from(posts)?.map(({ id, profile_id, media_location_url, written_text, created_date_time }) => (
                        <Card style={{ }} className="groups mx-2 mb-5 bg-dark card-container" key={id}>
                            <div className='card-container'>
                            <Card.Link className='card-info' href={`/${id}`}>
                                {<Card.Img  style={{ objectFit:'cover'}} variant="top" src={media_location_url} />}
                            </Card.Link>
                            <Card.ImgOverlay>
                                <Card.Text className="icon2">
                                    <FontAwesomeIcon className="icon-item" icon={faHeart} />
                                    <FontAwesomeIcon className="icon-item" icon={faCommentAlt} />
                                    <FontAwesomeIcon className="icon-item" icon={faRetweet} />
                                    <Card.Link href={`/posts/${id}`}>
                                        <FontAwesomeIcon className="icon-item" icon={faEye} />
                                    </Card.Link>
                                </Card.Text>
                            </Card.ImgOverlay>
                            </div>
                            <Card.Body className=''>
                                <Card.Subtitle>{written_text}</Card.Subtitle>
                                <Card.Text>{`Posted ${utcConverter(created_date_time)}`}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Fragment>
    )
}

export default Interactions;