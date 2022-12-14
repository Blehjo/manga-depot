import { useState, useEffect, Fragment } from 'react';
import { Card, Col, Row, Form } from 'react-bootstrap';
import axios from 'axios';

import { utcConverter } from '../../utils/date/Date';

import ProfileCard from '../ProfileCard';


export default function Messages() {
    const [conversations, setConversations] = useState([]);
    const [friends, setFriends] = useState([]);
    const [query, setQuery] = useState('');

    function handleChange(event) {
        event.preventDefault();
        setQuery(event.target.value);
    }

    useEffect(() => {
        const getConversations = async () => {
            await axios.get(`/api/conversations/`,
            {
                mode: 'no-cors',
            })
            .then((response) => setConversations(response.data));
        }

        getConversations();
    }, []);

    useEffect(() => {
        const getFriends = async () => {
            await axios.get(`/users/`, {
                mode: 'no-cors',
            })
            .then((response) => setFriends(response.data));
        }

        getFriends();
    }, []);

    function friendCheck(event) {
        event.preventDefault();
        setQuery(event.target.value);
        const search = friends.find((element) => element.username == query);
        setFriends(search);
    }

    console.log(friends);

  return (
    <Fragment>
        <Row md={2} lg={2} xl={2}>
            <Col md={4} lg={4} xl={4}>
                <h1 style={{ color: 'white' }}>Messages</h1>
            </Col>
            <Col md={3} lg={3} xl={3}>
                <Form>
                    <Form.Group>
                        <Form.Control value={query} onChange={friendCheck} type="search" placeholder="Search for a friend to message" />
                    </Form.Group>
                </Form>
            </Col>
        </Row>
        <Row xs={1} sm={1} md={2} lg={2} xl={2} className="g-4 pt-3" key="conversations">
            <Col md={6} lg={4} xl={4}>
                <ProfileCard/>
            </Col>
            <Col md={6} lg={8} xl={8}>
                {conversations?.length ? (Array.from(conversations)?.map(({ id, messages,  }) => (
                    <Card.Link key={id} style={{ textDecoration: 'none' }} href={`/messages/${id}`}>
                        <Card text='white' className='' bg='dark'>
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
            </Col>
        </Row>
    </Fragment>
  );
}