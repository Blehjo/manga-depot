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
                    <Col sm={4} md={4} lg={2} xl={2}>
                        <ListGroup>
                            {channels?.map((channel) => (
                                <ListGroup.Item action href={`#${channel.id}`} key={channel.id}>
                                    {channel.channel_name}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            {channels?.map((channel) => (
                                <Tab.Pane key={channel.id} eventKey={`#${channel.id}`}>
                                {channel.channel_description}
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