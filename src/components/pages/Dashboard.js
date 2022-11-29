import React, { useEffect, useState } from "react";
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

    return (
        <>
            <h1 style={{ color: 'white' }}>Dashboard</h1>
            <div className="query-container">
                <Row style={{ display: 'flex', justifyContent: 'space-between' }} xs={1} sm={1} md={2} lg={2} xl={3} className="" key="groups">
                    {Array.from(groups)?.map(({ id, group_name, media_location_url, group_description, country, platform, created_date_time, userprofile }) => (
                        <Col key={id}>
                            <Card style={{ }} className="mx-2 my-5 bg-dark card-container" key={id}>
                                <div className='card-container'>
                                <Card.Link className='card-info' href={`/${id}`}>
                                {<Card.Img  style={{ objectFit:'cover'}} variant="top" src={`${"https://www.museothyssen.org/sites/default/files/styles/full_resolution/public/imagen/2019-10/PICASSO%2C%20Pablo%20Ruiz_Corrida%20de%20toros_706%20%281976.83%29_FOTOH%20%23F21.jpg"}`} />}
                                </Card.Link>
                                <Card.ImgOverlay>
                                    <Card.Text className="icon2">
                                        <FontAwesomeIcon className="icon-item" icon={faHeart} />
                                        <FontAwesomeIcon className="icon-item" icon={faCommentAlt} />
                                        <FontAwesomeIcon className="icon-item" icon={faRetweet} />
                                        <Card.Link href={`/groups/${id}`}>
                                            <FontAwesomeIcon className="icon-item" icon={faEye} />
                                        </Card.Link>
                                    </Card.Text>
                                </Card.ImgOverlay>
                                </div>
                                <Card.Body className=''>
                                    <Card.Title>{group_name}</Card.Title>
                                    {group_description.length > 20 ? `Show description` : <Card.Subtitle>{group_description}</Card.Subtitle>}
                                    <Card.Text>{`Platform: ${platform}`}</Card.Text>
                                    <Card.Text>{`Created ${utcConverter(created_date_time)}`}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}

export default Dashboard;