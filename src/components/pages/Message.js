import { Card, Col, Row, Badge } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { utcConverter } from '../../utils/Date';

export default function Message() {
    const [groups, setMessages] = useState({});
    const [display, setDisplay] = useState(false);
    const { id } = useParams();
    
    function getMessages() {
        axios.get(`/api/conversations/${id}`,
        {
            mode: 'no-cors',
        })
        .then((response) => setMessages(response.data));
    }

    useEffect(() => {
        getMessages();
    }, [id]);

    const messages = groups.messages;

    return (
        <div className="groups-container">
            <h1 style={{ color: 'white' }}>Messages</h1>
            <Row xs={1} sm={1} md={1} lg={1} xl={1} className="g-4 pt-3" key="groups">
                {Array.from(messages)?.map(({ from_profile, message_text, sent_datetime}) => (
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
            </Row>
        </div>
    );
}