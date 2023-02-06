import { useState, useEffect, Fragment } from 'react';
import { Card, Col, Row, Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

import { utcConverter } from '../../utils/date/Date';

import ProfileCard from '../ProfileCard';

export default function Messages() {
    const [errorMessage, setErrorMessage] = useState('');
    const [conversationId, setConversationId] = useState(null);
    const [show, setShow] = useState(false);
    const [messageText, setMessageText] = useState('');
    const [userProfiles, setUserProfiles] = useState(null);
    const [conversations, setConversations] = useState([]);
    const [friends, setFriends] = useState([]);
    const [query, setQuery] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleMessageChange(event) {
        event.preventDefault();
        setMessageText(event.target.value);
    }

    function handleChange(event) {
        event.preventDefault();
        setQuery(event.target.value);
    }

    async function createConversation() {
        await axios({
            method: 'post',
            url: 'https://shellgeistapi.herokuapp.com/api/conversations/', 
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
        .then((response) => setConversationId(response.data.id))
        .catch(err => {
            setErrorMessage(err);
            console.error(errorMessage);
        });
    }

    function startConversation(event) {
        event.preventDefault();
        createConversation();
        handleShow();
    }

    function sendMessage(event) {
        event.preventDefault();
        const addChatMember = async () => {
            await axios( {
                method: 'post',
                url: `https://shellgeistapi.herokuapp.com/api/chatmembers/${conversationId}`,
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
        }
        const postMessage = async () => {
            await axios({
                method: 'post',
                url: `https://shellgeistapi.herokuapp.com/api/messages/${conversationId}`,
                data: {
                    message_text: messageText,
                    mode: 'no-cors', 
                },
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
        }

        addChatMember();
        postMessage();
        handleClose();
    }

    useEffect(() => {
        const getConversations = async () => {
            await axios({
                method: 'get',
                url: `https://shellgeistapi.herokuapp.com/api/conversations/`,
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            .then((response) => setConversations(response.data));
        }

        getConversations();
    }, []);

    useEffect(() => {
        const information = async () => {
            await axios({
                method: 'get',
                url: 'https://shellgeistapi.herokuapp.com/users/', 
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            .then((response) => setUserProfiles(response.data));
        };

        function getProfile() {
            userProfiles.find((element) => {
                if (element.username == query) {
                    setFriends(element);
                }
            });
        }
        
        information();
        getProfile();
    }, [query])

  return (
    <Fragment>
        <Row md={2} >
            <Col md={4} >
                <h1 style={{ color: 'white' }}>Messages</h1>
            </Col>
            
        </Row>
        <Row xs={1} md={3} className="g-4 pt-3" key="conversations">
            <Col md={6} lg={4} >
                <ProfileCard/>
            </Col>
            <Col md={6}>
                {Object.keys(friends).length ? 
                    <Fragment>
                    <Card style={{ color: 'white' }} className='bg-dark'>
                        <Row xs={3} >
                            <Col xs={2} ></Col>
                            <Col><Card.Title>{friends.username}</Card.Title></Col>
                            <Col style={{ textAlign: 'end'}}><Button onClick={startConversation}>Message</Button></Col>
                        </Row>
                    </Card>
                    <Modal  show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Write a message</Modal.Title>
                    </Modal.Header>
                    <Form style={{ backgroundColor: 'black' }} onSubmit={sendMessage}>
                        <Modal.Body>
                                <Form.Group
                                className="mb-3"
                                controlId="ControlTextarea"
                                >
                                <Form.Label>Write your thoughts on the game here</Form.Label>
                                <Form.Control value={messageText} onChange={handleMessageChange} as="textarea" rows={3} />
                                </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="dark" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="dark" type="submit">
                                Post
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
                </Fragment>
                 : 
                <Fragment>
                    <Col >
                        <Form style={{ marginBottom: '1rem' }} >
                            <Form.Group>
                                <Form.Control value={query} onChange={handleChange} type="search" placeholder="Search for a friend to message" />
                            </Form.Group>
                        </Form>
                    </Col>
                    {conversations?.length ? (Array.from(conversations)?.map(({ id, messages,  }) => (
                        <Card.Link key={id} style={{ textDecoration: 'none' }} href={`/messages/${id}`}>
                            <Card text='white' className='mb-4' bg='dark'>
                                <Row>
                                    <Col xl={4}>
                                        <Card.Img height='100' style={{ objectFit:'cover'}} src={`${"https://www.museothyssen.org/sites/default/files/styles/full_resolution/public/imagen/2019-10/PICASSO%2C%20Pablo%20Ruiz_Corrida%20de%20toros_706%20%281976.83%29_FOTOH%20%23F21.jpg"}`} />
                                    </Col>
                                    <Col xl={8} key={id}>
                                        <Card.Body>
                                            <Card.Subtitle>{messages[messages?.length-1].message_text}</Card.Subtitle>
                                            <Card.Text>{`Delivered ${utcConverter(messages[0]?.sent_datetime)}`}</Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Card.Link>
                    ))) : (
                        <Fragment>
                            <div style={{ color: 'white' }}>Write a message to a mate, so you can have messages to view.</div>
                        </Fragment>
                    )}
                </Fragment>
                }
            </Col>
            <Col md={3}>
            </Col>
        </Row>
    </Fragment>
  );
}