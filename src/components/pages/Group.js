import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Row, Col, Tab, ListGroup, Card, Form, Button, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { utcConverter } from "../../utils/Date";

const Group = () => {
    const [group, setGroup] = useState({});
    const [groups, setMessages] = useState({});
    const [messageText, setMessageText] = useState('');
    const { id } = useParams();
    
    function getGroup() {
        axios.get(`/api/groups/${id}`,
        {
            mode: 'no-cors',
        })
        .then((response) => setGroup(response.data));
    }

    function getMessages() {
        axios.get(`/api/conversations/${id}`,
        {
            mode: 'no-cors',
        })
        .then((response) => setMessages(response.data));
    }

    function postMessages(evt) {
        // evt.preventDefault();
        axios.post(`/api/messages/${id}/`,
        {
            from_profile: id,
            message_text: messageText
        })
        .then((response) => setMessages(response.data));
    }

    function messageHandler(evt) {
        const content = evt.target.value;
        setMessageText(content);
    }

    useEffect(() => {
        getGroup();
        getMessages();
    }, []);

    const channels = group.groupchannels;

    const messages = groups.messages;

    return (
        <Fragment>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col key='list' sm={4} md={4} lg={2} xl={2}>
                        <Nav variant="pills" className="flex-column">
                            <h1>Channels</h1>
                            {channels?.map(({id, channel_name}) => (
                                <Nav.Item  variant="light" style={{ color: 'white' }} href={`#${id}`} key={id}>
                                    <Nav.Link eventKey={id}>
                                        {channel_name}
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                    </Col>
                    <Col style={{ margin: 'auto' }}key='content' sm={8} md={8} lg={10} xl={10}>
                        <Tab.Content>
                            {channels?.map(({id, channel_description}) => (
                                <Tab.Pane key={id} eventKey={`#${id}`}>
                                    {channel_description}
                                    {/* <h1 style={{ color: 'white' }}>Messages</h1> */}
                                    {/* <div> */}
                                        {/* <Row xs={1} sm={1} md={1} lg={1} xl={1} className="g-4 pt-3" key="groups"> */}
                                            {/* <div style={{ overflowY: 'auto', height: '300px' }}>
                                            {messages?.map(({ from_profile, message_text, sent_datetime}) => (
                                                <Card.Link style={{ textDecoration: 'none', margin: '5px' }} href={`/messages/${from_profile}`}>
                                                    <Card text='white' className='' bg='dark'>
                                                        <Row>
                                                            <Col xl={4}>
                                                                <Card.Img height='100' style={{ objectFit:'cover'}} src={`${"https://www.museothyssen.org/sites/default/files/styles/full_resolution/public/imagen/2019-10/PICASSO%2C%20Pablo%20Ruiz_Corrida%20de%20toros_706%20%281976.83%29_FOTOH%20%23F21.jpg"}`} />
                                                            </Col>
                                                            <Col xl={8} key={from_profile}>
                                                                <Card.Body>
                                                                    <Card.Subtitle>{message_text}</Card.Subtitle>
                                                                    <Card.Text>{`Delivered ${utcConverter(sent_datetime)} `}</Card.Text>
                                                                </Card.Body>
                                                            </Col>
                                                        </Row>
                                                    </Card>
                                                </Card.Link>
                                            ))}
                                            </div> */}
                                            {/* <Form onSubmit={postMessages}>
                                                <Row>
                                                    <Col lg={10} xl={10}>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                            <Form.Control onChange={messageHandler} as="textarea" rows={3} />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={2} xl={2}>
                                                        <Button style={{width: '100%', height: '85%'}} variant="primary" type="submit">
                                                            Send
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Form> */}
                                        {/* </Row> */}
                                    {/* </div> */}
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Fragment>
    )
}

export default Group;