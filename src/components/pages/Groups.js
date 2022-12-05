import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card, Badge } from "react-bootstrap";
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
        <div className="groups-container">
            <h1 style={{ color: 'white' }}>Groups</h1>
            <Row xs={1} sm={1} md={1} lg={1} xl={1} className="g-4 pt-3" key="groups">
                {Array.from(groups)?.map(({ id, group_name, group_description, platform, country, created_date_time }) => (
                    <Card.Link style={{ textDecoration: 'none' }} href={`/groups/${id}`}>
                        <Card text='white' className='' bg='dark'>
                            <Row>
                                <Col xl={4}>
                                    <Card.Img height='200' style={{ objectFit:'cover'}} src={`${"https://www.museothyssen.org/sites/default/files/styles/full_resolution/public/imagen/2019-10/PICASSO%2C%20Pablo%20Ruiz_Corrida%20de%20toros_706%20%281976.83%29_FOTOH%20%23F21.jpg"}`} />
                                </Col>
                                <Col xl={8} key={id}>
                                    <Card.Header>{group_name}</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            {group_description}
                                        </Card.Text>
                                        <Card.Text>{`Established ${utcConverter(created_date_time)}`}</Card.Text>
                                        <Badge pill='info'>{platform}</Badge>{' '}
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Card.Link>
                ))}
            </Row>
        </div>
    )
}

export default Groups;