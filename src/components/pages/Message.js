import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { utcConverter } from '../../utils/Date';

export default function Message() {
    const bottomRef = useRef(null);
    const [groups, setMessages] = useState({});
    const { id } = useParams();
    const [messageText, setMessageText] = useState('');
    
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
        getMessages();
    }, [id]);
    
    const messages = groups.messages;

    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [messages])

    return (
        <div className="groups-container">
            <h1 style={{ color: 'white' }}>Messages</h1>
            <div style={{ padding: '15px' }}>
                <Row xs={1} sm={1} md={1} lg={1} xl={1} className="g-4 pt-3" key="groups">
                    {messages?.map(({ from_profile, message_text, sent_datetime}) => (
                        <Card.Link style={{ textDecoration: 'none' }} href={`/messages/${from_profile}`}>
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
                    <Form ref={bottomRef} onSubmit={postMessages}>
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
                    </Form>
                </Row>
            </div>
        </div>
    );
}