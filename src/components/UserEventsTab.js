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
            {events?.length > 0 ? Array.from(events)?.map(({ id, group_name, group_description, media_location_url, platform, country, created_date_time }) => (
                    <Card.Link style={{ textDecoration: 'none', margin: '1rem', color: 'white', textAlign: 'center' }} href={`/events/${id}`}>
                        {/* <Card style={{ margin: '1rem', color: 'white', textAlign: 'center' }} bg='dark'> */}
                            <Row>
                                <Col xl={4}>
                                    <Card.Img height='200' style={{ objectFit:'cover', borderRadius: '.5rem' }} src={media_location_url} />
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
                        {/* </Card> */}
                    </Card.Link>
            )) : (
                <Card style={{ color: 'white', textAlign: 'center' }}className="bg-dark">
                    <Card.Title>"Stay tuned. Currently no events..."</Card.Title>
                </Card>
            )}
        </Fragment>
    )
}

export default UserEventsTab;