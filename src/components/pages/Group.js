import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Row, Col, Tab, Card, Form, Button, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { utcConverter } from "../../utils/date/Date";

const Group = () => {
    const [group, setGroup] = useState({});
    const [messages, setMessages] = useState({});
    const [messageText, setMessageText] = useState('');
    const [value, setValue] = useState('');
    const { id } = useParams();

    function handleChange(event) {
        event.preventDefault();
        setValue(event.target.value);
    }

    function postMessages() {
        // evt.preventDefault();
        axios.post(`/api/messages/${id}/`,
        {
            from_profile: id,
            message_text: messageText
        })
        .then((response) => setMessages(response.data));
    }

    function messageHandler(evt) {
        setMessageText(evt.target.value);
    }

    useEffect(() => {
        // async function getMessages() {
        //     await axios.get(`/api/conversations/${id}`,
        //     {
        //         mode: 'no-cors',
        //     })
        //     .then((response) => setMessages(response.data));
        // }

        async function getGroup() {
            await axios.get(`/api/groups/${id}`,
            {
                mode: 'no-cors',
            })
            .then((response) => setGroup(response.data));
        }

        getGroup();
        // getMessages();
    }, [id]);

    const channels = group.groupchannels;

    return (
        <Fragment>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row style={{ color: 'white' }}>
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
                    <Col className='mt-3' style={{ width: '70%', margin: 'auto' }} key='content' sm={8} md={8} lg={10} xl={10}>
                        <Tab.Content>
                            {channels?.map(({id, channel_description}) => (
                                <Tab.Pane key={id} eventKey={id}>
                                    {channel_description}
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                        <Form>
                            <Row md={1} lg={2} xl={2}>
                                <Col lg={10} xl={10}>
                                    <form>
                                        <textarea style={{ width: '100%'}} value={value} onChange={handleChange}>

                                        </textarea>
                                    </form>
                                </Col>
                                <Col lg={2} xl={2}>
                                    <Button variant="primary" type="submit">
                                        Send
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Tab.Container>
        </Fragment>
    )
}

export default Group;