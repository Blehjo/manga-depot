import { Fragment, useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import axios from 'axios';

import { utcConverter } from '../utils/date/Date';
import { useParams } from 'react-router';

const UserEventsTab = () => {
    const [events, setEvents] = useState();
    const { id } = useParams();
    
    useEffect(() => {
        const getEvents = async () => {
            await axios.get(`/events/${id}`, {
                mode: 'no cors'
            })
            .then((resp) => setEvents(resp.data)); 
        }
        getEvents();
    }, [])

    return (
        <Fragment>
            {events?.length > 0 ? Array.from(events)?.map(({ id, group_name, group_description, platform, country, created_date_time }) => (
                    // <Card.Link style={{ textDecoration: 'none' }} href={`/events/${id}`}>
                        <Card style={{ margin: '1rem', color: 'white' }} bg='dark'>
                            <Row>
                                <Col xl={4}>
                                    <Card.Img height='200' style={{ objectFit:'cover'}} src={`${"https://www.museothyssen.org/sites/default/files/styles/full_resolution/public/imagen/2019-10/PICASSO%2C%20Pablo%20Ruiz_Corrida%20de%20toros_706%20%281976.83%29_FOTOH%20%23F21.jpg"}`} />
                                </Col>
                                <Col xl={8} key={id}>
                                    <Card.Header>{group_name}</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            {group_description}
                                        </Card.Text>
                                        <Card.Text>{`Established ${utcConverter(created_date_time)}`}</Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    // </Card.Link>
            )) : (
                <Card style={{ color: 'white' }}className="bg-dark">
                    <Card.Title>"Stay tuned. Currently no events..."</Card.Title>
                </Card>
            )}
        </Fragment>
    )
}

export default UserEventsTab;