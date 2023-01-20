import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Row, Col, Tab, Card, Form, Button, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { utcConverter } from "../../utils/date/Date";

const Group = () => {
    const [group, setGroup] = useState({});
    const [messages, setMessages] = useState([]);
    const [events, setEvents] = useState([]);
    const [messageText, setMessageText] = useState('');
    const [channel, setChannel] = useState(null);
    const { id } = useParams();

    function handleClickEvent(event) {
        event.preventDefault();
        setChannel(event.target.id);
    }

    async function postMessage(evt) {
        evt.preventDefault();
        await axios.post(`https://shellgeistapi.herokuapp.com/api/channelcomments/${channel}/`,
        {
            channel_comment_text: messageText
        })
        setMessageText('');
    }

    function messageHandler(evt) {
        setMessageText(evt.target.value);
    }

    useEffect(() => {
        async function getChannelContent() {
            await axios.get(`https://shellgeistapi.herokuapp.com/api/channels/${channel}`,
            {
                mode: 'no-cors',
            })
            .then((response) => setMessages(response.data));
        }

        async function getGroup() {
            await axios.get(`https://shellgeistapi.herokuapp.com/api/groups/${id}`,
            {
                mode: 'no-cors',
            })
            .then((response) => setGroup(response.data));
        }

        async function getEvents() {
            await axios.get(`https://shellgeistapi.herokuapp.com/api/events/${id}`, {
                mode: 'no-cors'
            })
            .then((response) => setEvents(response.data));
        }

        getChannelContent();
        getGroup();
        getEvents();
    }, [id, channel]);

    const channels = group.groupchannels;

    return (
        <Fragment>
            <Row md={2}>
                <Col md={9}>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row style={{ color: 'white', position: 'relative' }}>
                    <Col key='list' sm={4} md={4} lg={2} xl={3}>
                        <Nav variant="pills" className="flex-column">
                            <h1>Channels</h1>
                            <img style={{ width: '90%', marginBottom: '1rem', borderRadius: '.5rem' }} src={group.media_location_url} alt={group.group_name}/>
                            {channels?.map(({id, channel_name}) => (
                                <Nav.Item id={id} onClick={handleClickEvent} variant="light" style={{ color: 'white' }} href={`#${id}`} key={id}>
                                    <Nav.Link id={id} eventKey={id} >
                                        <div id={id} >
                                        {channel_name}
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                    </Col>
                    <Col className='mt-3' style={{margin: 'auto' }} key='content' md={6}>
                        <Tab.Content>
                            {channels?.map(({id, channel_description }) => (
                                <Tab.Pane id={id} key={id} eventKey={id}>
                                    {channel_description}
                                    <Row style={{ marginTop: '2rem', height: '40vh', overflowY: 'auto', overflowX: 'hidden' }} key={id}>
                                        <Col> 
                                    {messages?.map(({ channelcomments, id}) => (
                                        channelcomments?.map(({ channel_comment_text, created_date_time, id }) => (
                                            <Card key={id} className="bg-dark" style={{ marginTop: '1rem' }}>
                                                <Card.Body>
                                                    <Card.Text>
                                                        {channel_comment_text}
                                                    </Card.Text>
                                                <Card.Text>{utcConverter(created_date_time)}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        ))
                                        ))}
                                        </Col>
                                    </Row> 
                                    <Form onSubmit={postMessage} style={{ position: 'absolute', bottom: '0', width: '100%' }}>
                                        <Row md={2} >
                                            <Col sm={8} xl={5}>
                                                <Form.Control as="textarea" value={messageText} onChange={messageHandler}/>
                                            </Col>
                                            <Col>
                                                <Button variant="light" type="submit">
                                                    Send
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            </Col>
            <Col md={3}>
                <h3 className="text-white">Events</h3>
                <div style={{ height: '75vh', overflowY: 'auto', color: 'white' }}>
                {Array.from(events)?.map(({ id, event_name, media_location_url }) => (
                    <Card className="bg-dark" style={{ marginTop: '1rem'}}>
                        <Card.Link style={{ textDecoration: 'none' }} href={`/events/${id}`}>
                        <Card.Img src={media_location_url} alt={event_name} />
                        <Card.Body>
                            <Card.Text>{event_name}</Card.Text>
                        </Card.Body>
                        </Card.Link>
                    </Card>
                ))}
                </div>
            </Col>
            </Row>
        </Fragment>
    )
}

export default Group;