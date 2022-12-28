import { Fragment, useState, useEffect } from 'react';
import { Card, Col, Row, Modal } from 'react-bootstrap';
import axios from 'axios';

import SearchEvent from './SearchEvent';
import CreateEvent from './CreateEvent';

import { utcConverter } from '../utils/date/Date';

const EventsTab = () => {
    const [events, setEvents] = useState();
    const [showCreateGroup, setShowCreateGroup] = useState(false);
    const [showSearchGroup, setShowSearchGroup] = useState(false);

    const handleCloseCreateGroup = () => setShowCreateGroup(false);
    const handleShowCreateGroup= () => setShowCreateGroup(true);
    
    const handleCloseSearchGroup = () => setShowSearchGroup(false);
    const handleShowSearchGroup= () => setShowSearchGroup(true);
    
    useEffect(() => {
        const getEvents = async () => {
            await axios.get(`/api/events/`, {
                mode: 'no cors'
            })
            .then((resp) => setEvents(resp.data)); 
        }
        getEvents();
    }, [])

    return (
        <Fragment>
            <Row xs={2} >
                <Col>
                    <Card style={{ color: 'white', textAlign: 'center' }} className='bg-dark'>
                        <Card.Body>
                            <Card.Title show={showCreateGroup} onHide={handleCloseCreateGroup} onClick={handleShowCreateGroup}>Create an event</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ color: 'white', textAlign: 'center' }} className='bg-dark'>
                        <Card.Body>
                            <Card.Title show={showCreateGroup} onHide={handleCloseSearchGroup} onClick={handleShowSearchGroup}>Join an event</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {events?.length > 0 ? Array.from(events)?.map(({ id, group_name, group_description, platform, country, created_date_time, media_location_url }) => (
                    <Card.Link style={{ textDecoration: 'none' }} href={`/events/${id}`}>
                        <Card style={{ marginTop: '1rem', color: 'white' }} bg='dark'>
                            <Row>
                                <Col xl={4}>
                                    <Card.Img height='200' style={{ objectFit:'cover'}} src={media_location_url} />
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
                    </Card.Link>
            )) : (
                <Card style={{ color: 'white', textAlign: 'center', marginTop: '1rem' }}className="bg-dark">
                    <Card.Title>"Stay tuned. Currently no events..."</Card.Title>
                </Card>
            )}
            <Modal show={showCreateGroup} onHide={handleCloseCreateGroup}>
                <CreateEvent />
            </Modal>
            <Modal show={showSearchGroup} onHide={handleCloseSearchGroup}>
                <SearchEvent />
            </Modal>
        </Fragment>
    )
}

export default EventsTab;