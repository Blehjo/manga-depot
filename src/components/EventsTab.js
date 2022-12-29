import { Fragment, useState, useEffect } from 'react';
import { Card, Col, Row, Modal, Button } from 'react-bootstrap';
import axios from 'axios';

import SearchEvent from './SearchEvent';
import CreateEvent from './CreateEvent';

const EventsTab = () => {
    const [auth, setAuth] = useState([]);
    const [events, setEvents] = useState();
    const [showCreateGroup, setShowCreateGroup] = useState(false);
    const [showSearchGroup, setShowSearchGroup] = useState(false);

    const handleCloseCreateGroup = () => setShowCreateGroup(false);
    const handleShowCreateGroup= () => setShowCreateGroup(true);
    
    const handleCloseSearchGroup = () => setShowSearchGroup(false);
    const handleShowSearchGroup= () => setShowSearchGroup(true);

    async function handleClickEvent(event) {
        await axios.post(`/api/eventMembers/`, {
            event_id: event.target.id
        })
    }
    
    async function unfollowEvent(event) {
        await axios.delete(`/api/eventMembers/${event.target.id}`)
    }
    
    useEffect(() => {
        async function getUser() {
            await axios.get('/api/users')
            .then((response) => setAuth(response.data[0]));
        }

        const getEvents = async () => {
            await axios.get(`/api/events/`, {
                mode: 'no cors'
            })
            .then((resp) => setEvents(resp.data)); 
        }

        getUser();
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
            {events?.length > 0 ? Array.from(events)?.map(({ id, event_name, event_description, eventmembers, platform, country, created_date_time, media_location_url, group_id }) => (
                <Row style={{ marginBottom: '2rem', color: 'white', marginTop: '2rem' }}>
                    <Col xl={4}>
                    <Card.Link style={{ textDecoration: 'none', color: 'white' }} href={`/events/${id}`}>
                        <Card.Img height='200' style={{ objectFit:'cover', borderRadius: '.5rem' }} src={media_location_url} />
                    </Card.Link>
                    </Col>
                    <Col xl={8} key={id}>
                        <Card.Link style={{ textDecoration: 'none', color: 'white' }} href={`/events/${id}`}>
                        <Card.Header>{event_name}</Card.Header>
                        </Card.Link>
                        <Card.Body>
                            <Card.Text>
                                {event_description}
                            </Card.Text>
                            <Col style={{ marginTop: '1rem' }}>
                                {eventmembers.length > 0 && (eventmembers.some(({ profile_id }) => profile_id === auth.id)) ? <Button variant="light" id={id} onClick={unfollowEvent}>Leave Event</Button> : <Button variant="light" id={id} onClick={handleClickEvent}>Join Event</Button>}
                            </Col>
                        </Card.Body>
                    </Col>
                </Row>
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