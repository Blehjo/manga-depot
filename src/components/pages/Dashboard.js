import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCommentAlt, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons';
import utcConverter from "../../utils/Date";

const Dashboard = () => {
    const [groups, setGroups] = useState([]);
    function getGroups() {
        axios.get("http://localhost:3001/",
        {
            mode: 'no-cors',
        })
        .then((response) => setGroups(response.data));
    }

    useEffect(() => {
        getGroups();
    }, []);

    console.log(groups);
    return (
        <>
            <h1>Dashboard</h1>
            <Row>
                <div>
                    <Col>
                        {Array.from(groups)?.map((group) => (
                            <Card style={{ width:'60rem' }} className="mx-2 my-5 bg-dark card-container" key={group.id}>
                                <div className='card-container'>
                                <Card.Link className='card-info' href={`/${group.id}`}>
                                {<Card.Img  style={{ objectFit:'cover'}} variant="top" src={`${"https://www.museothyssen.org/sites/default/files/styles/full_resolution/public/imagen/2019-10/PICASSO%2C%20Pablo%20Ruiz_Corrida%20de%20toros_706%20%281976.83%29_FOTOH%20%23F21.jpg"}`} />}
                                </Card.Link>
                                <Card.ImgOverlay>
                                    <Card.Text className="icon2">
                                        <FontAwesomeIcon className="icon-item" icon={faHeart} />
                                        <FontAwesomeIcon className="icon-item" icon={faCommentAlt} />
                                        <FontAwesomeIcon className="icon-item" icon={faRetweet} />
                                        <FontAwesomeIcon className="icon-item" icon={faEye} />
                                    </Card.Text>
                                </Card.ImgOverlay>
                                </div>
                                <Card.Title>{group.group_name}</Card.Title>
                                <Card.Subtitle>{group.group_description}</Card.Subtitle>
                                <Card.Body className=''>
                                    <Card.Text>
                                        {group.platform}
                                    </Card.Text>
                                    <Card.Text>
                                        {`Created ${utcConverter(group.created_date_time)}`}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                </div>
            </Row>
        </>
    )
}

export default Dashboard;