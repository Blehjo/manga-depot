import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Tab, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Group = () => {
    const [group, setGroup] = useState({});
    const { id } = useParams();
    
    function getGroup() {
        axios.get(`http://localhost:3001/api/groups/${id}`,
        {
            mode: 'no-cors',
        })
        .then((response) => setGroup(response.data));
    }

    useEffect(() => {
        getGroup();
    }, []);

    const channels = group.groupchannels;

    return (
        <>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col className='sticky-top' style={{ backgroundColor: 'black', height: '100vh', width: 'fit-content', position: 'absolute', paddingTop: '60px', marginLeft: '', zIndex: '-1' }} key='list' sm={4} md={4} lg={2} xl={2}>
                        <ListGroup>
                            <h1>Channels</h1>
                            {channels?.map(({id, channel_name}) => (
                                <ListGroup.Item  variant="light" style={{ color: 'white', backgroundColor: 'black', width: 'fit-content'}}action href={`#${id}`} key={id}>
                                    {channel_name}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col key='content' sm={8}>
                        <Tab.Content>
                            {channels?.map(({id, channel_description}) => (
                                <Tab.Pane key={id} eventKey={`#${id}`}>
                                    {channel_description}
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    )
}

export default Group;