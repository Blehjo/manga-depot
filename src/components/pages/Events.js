import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import { utcConverter } from "../../utils/date/Date";

const Events = () => {
    const [events, setEvents] = useState({});

    useEffect(() => {
        async function getEvents() {
            await axios.get(`/events/`,
            {
                mode: 'no-cors',
            })
            .then((response) => setEvents(response.data));
        }
        getEvents();
    }, []);

    return (
        <Fragment>
            <Row xs={1} sm={1} md={1} lg={1} xl={1} className="g-4 mt-2 m-5" key="events">
                {Array.from(events)?.map(({ id, event_name, event_description, group, group_id, media_location_url, groupmembers }) => (
                    <Card.Link style={{ textDecoration: 'none' }} href={`/groups/${id}`}>
                        <Card text='white' className='' bg='dark'>
                            <Row>
                                <Col xl={4}>
                                    <Card.Img height='200' style={{ objectFit:'cover'}} src={`${"https://www.museothyssen.org/sites/default/files/styles/full_resolution/public/imagen/2019-10/PICASSO%2C%20Pablo%20Ruiz_Corrida%20de%20toros_706%20%281976.83%29_FOTOH%20%23F21.jpg"}`} />
                                </Col>
                                <Col xl={8} key={id}>
                                    <Card.Header>{event_name}</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            {event_description}
                                        </Card.Text>
                                        {/* <Card.Text>{`Established ${utcConverter(created_date_time)}`}</Card.Text> */}
                                        {/* <Badge pill='info'>{platform}</Badge>{' '} */}
                                    </Card.Body>
                                    <Card.Footer>
                                        Group Name: {group.group_name} | Created: {utcConverter(group.created_date_time)} | Members: {groupmembers.length}
                                    </Card.Footer>
                                </Col>
                            </Row>
                        </Card>
                    </Card.Link>
                ))}
            </Row>
        </Fragment>
    )
}

export default Events;