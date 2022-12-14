import { Card, Col, Row } from 'react-bootstrap';
import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import { utcConverter } from '../../utils/date/Date';

import ProfileCard from '../ProfileCard';

export default function Messages() {
    const [conversations, setConversations] = useState({});

    useEffect(() => {
        const getConversations = async () => {
            await axios.get(`/api/conversations/:id`,
            {
                mode: 'no-cors',
            })
            .then((response) => setConversations(response.data));
        }
        getConversations();
    }, []);

  return (
    <Fragment>
        <ProfileCard/>
        <h1 style={{ color: 'white' }}>Messages</h1>
        <Row xs={1} sm={1} md={1} lg={1} xl={1} className="g-4 pt-3" key="conversations">
            {conversations.length ? (Array.from(conversations)?.map(({ id, messages,  }) => (
                <Card.Link key={id} style={{ textDecoration: 'none' }} href={`/messages/${id}`}>
                    <Card text='white' className='' bg='dark'>
                        <Row>
                            <Col xl={4}>
                                <Card.Img height='100' style={{ objectFit:'cover'}} src={`${"https://www.museothyssen.org/sites/default/files/styles/full_resolution/public/imagen/2019-10/PICASSO%2C%20Pablo%20Ruiz_Corrida%20de%20toros_706%20%281976.83%29_FOTOH%20%23F21.jpg"}`} />
                            </Col>
                            <Col xl={8} key={id}>
                                <Card.Body>
                                    <Card.Subtitle>{messages[messages.length-1].message_text}</Card.Subtitle>
                                    <Card.Text>{`Delivered ${utcConverter(messages[0].sent_datetime)}`}</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Card.Link>
            ))) : (
                <div style={{ color: 'white' }}>Write a message to a mate, so you can have messages to view.</div>
            )}
        </Row>
    </Fragment>
  );
}