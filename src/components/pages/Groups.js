import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCommentAlt, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons';
import { utcConverter } from "../../utils/Date";

const Groups = () => {
    const [groups, setGroups] = useState({});
    const [display, setDisplay] = useState(false);
    
    function getGroups() {
        axios.get(`/api/groups/`,
        {
            mode: 'no-cors',
        })
        .then((response) => setGroups(response.data));
    }

    useEffect(() => {
        getGroups();
    }, []);

    return (
        <div className="queries-container">
            <h1 style={{ color: 'white' }}>Groups</h1>
            <Row xs={1} sm={1} md={1} lg={1} xl={1} className=" g-4 pt-3" key="groups">
                {Array.from(groups)?.map(({ id, group_name, group_description, platform, country, created_date_time }) => (
                    <Col key={id}>
                        <Card 
                            style={{ }} 
                            className="groups mx-2 mb-5 bg-dark card-container"
                            onMouseEnter={() => (
                                setDisplay(true)
                            )}
                            onMouseLeave={() => (
                                setDisplay(false)
                            )}
                        >
                            <div className='card-container'>
                            <Card.Link className='card-info' href={`/${id}`}>
                                {<Card.Img  style={{ objectFit:'cover'}} variant="top" src={`${"https://www.museothyssen.org/sites/default/files/styles/full_resolution/public/imagen/2019-10/PICASSO%2C%20Pablo%20Ruiz_Corrida%20de%20toros_706%20%281976.83%29_FOTOH%20%23F21.jpg"}`} />}
                            </Card.Link>
                            <Card.ImgOverlay>
                                <div 
                                    className="icon2"
                                >
                                    <div className={`icon-item ${display ? '' : 'card-actions'}`}>
                                        <FontAwesomeIcon className="icon-item" icon={faHeart} />
                                        <FontAwesomeIcon className="icon-item" icon={faCommentAlt} />
                                        <FontAwesomeIcon className="icon-item" icon={faRetweet} />
                                        <Card.Link href={`/groups/${id}`}>
                                            <FontAwesomeIcon className="icon-item" icon={faEye} />
                                        </Card.Link>
                                    </div>
                                </div>
                            </Card.ImgOverlay>
                            </div>
                            <Card.Body className=''>
                                <Card.Title>{group_name}</Card.Title>
                                <Card.Subtitle>{group_description}</Card.Subtitle>
                                <Badge pill='info'>{platform}</Badge>{' '}
                                <Card.Text>{`Posted ${utcConverter(created_date_time)}`}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Groups;