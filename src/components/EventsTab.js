import { Fragment, useState, useEffect } from 'react';
import { Card, Col, Row, Modal, Button } from 'react-bootstrap';
import axios from 'axios';

import SearchEvent from './SearchEvent';
import CreateEvent from './CreateEvent';

const EventsTab = () => {
    const [events, setEvents] = useState();
    const [showCreateEvent, setShowCreateEvent] = useState(false);
    const [showSearchEvent, setShowSearchEvent] = useState(false);

    const handleCloseCreateEvent = () => setShowCreateEvent(!showCreateEvent);
    const handleShowCreateEvent= () => setShowCreateEvent(!showCreateEvent);
    
    const handleCloseSearchEvent = () => setShowSearchEvent(!showSearchEvent);
    const handleShowSearchEvent= () => setShowSearchEvent(!showSearchEvent);

    async function handleClickEvent(event) {
        await axios.post(`https://shellgeistapi.herokuapp.com/api/eventMembers/`, {
            event_id: event.target.id
        })
    }
    
    async function unfollowEvent(event) {
        await axios.delete(`https://shellgeistapi.herokuapp.com/api/eventMembers/${event.target.id}`)
    }
    
    useEffect(() => {
        async function getUser() {
            await axios({
                method: 'get',
                url: 'https://shellgeistapi.herokuapp.com/api/users',
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
        }

        const getEvents = async () => {
            await axios({
                method: 'get',
                url: `https://shellgeistapi.herokuapp.com/api/events/`, 
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
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
                            <Card.Title style={{ cursor: 'pointer' }} onClick={handleShowCreateEvent}>Create an event</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ color: 'white', textAlign: 'center' }} className='bg-dark'>
                        <Card.Body>
                            <Card.Title style={{ cursor: 'pointer' }} onClick={handleShowSearchEvent}>Join an event</Card.Title>
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
                                {eventmembers.length > 0 && (eventmembers.some(({ profile_id }) => profile_id === 'auth.id')) ? <Button variant="light" id={id} onClick={unfollowEvent}>Leave Event</Button> : <Button variant="light" id={id} onClick={handleClickEvent}>Join Event</Button>}
                            </Col>
                        </Card.Body>
                    </Col>
                </Row>
            )) : (
                <Card style={{ color: 'white', textAlign: 'center', marginTop: '1rem' }}className="bg-dark">
                    <Card.Title>"Stay tuned. Currently no events..."</Card.Title>
                </Card>
            )}
            <Modal show={showCreateEvent} onHide={handleCloseCreateEvent}>
                <CreateEvent />
            </Modal>
            <Modal show={showSearchEvent} onHide={handleCloseSearchEvent}>
                <SearchEvent />
            </Modal>
        </Fragment>
    )
}

export default EventsTab;