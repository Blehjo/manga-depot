import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faDownload, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { utcConverter } from "../../utils/date/Date";


const Dashboard = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        async function getGroups() {
            await axios.get("/groups",
            {
                mode: 'no-cors',
            })
            .then((response) => setGroups(response.data));
        }
        getGroups();
    }, []);

    return (
        <Fragment>
            <h1 style={{ color: 'white' }}>Dashboard</h1>
            <Row style={{ display: 'flex', justifyContent: 'space-between' }} xs={1} sm={1} md={2} lg={2} xl={3} className="" key="groups">
                {Array.from(groups)?.map(({ id, group_name, media_location_url, group_description, country, platform, created_date_time, groupmembers }) => (
                    <Col key={id}>
                        <Card 
                            style={{ color: 'white' }} 
                            className="mx-2 my-5 bg-dark card-container" 
                            key={id}
                        >
                            {<Card.Img  href={`/groups/${id}`} style={{ objectFit:'cover'}} variant="top" src={media_location_url ? media_location_url : `${"https://www.museothyssen.org/sites/default/files/styles/full_resolution/public/imagen/2019-10/PICASSO%2C%20Pablo%20Ruiz_Corrida%20de%20toros_706%20%281976.83%29_FOTOH%20%23F21.jpg"}`} />}
                                <Card.ImgOverlay>
                                    <Nav style={{ justifyContent: 'start', fontSize: '25px', color: 'white' }}>
                                        <Nav.Item>
                                            <Nav.Link><FontAwesomeIcon className="icon-item" icon={faArrowRight} /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link><FontAwesomeIcon className="icon-item" icon={faDownload} /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link href={`/groups/${id}`}><FontAwesomeIcon className="icon-item" icon={faEye} /></Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Card.ImgOverlay>
                            <Card.Body className=''>
                                <Card.Title>{group_name}</Card.Title>
                                {group_description.length > 20 ? `Description` : <Card.Subtitle>{group_description}</Card.Subtitle>}
                                <Card.Text>{`Platform: ${platform}`}</Card.Text>
                                <Card.Text>{`Created ${utcConverter(created_date_time)}`} | Members: {groupmembers.length}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Fragment>
    )
}

export default Dashboard;