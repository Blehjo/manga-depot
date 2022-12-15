import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const EventCarousel = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function getEvents() {
            await axios.get("/events",
            {
                mode: 'no-cors',
            })
            .then((response) => setEvents(response.data));
        }
        getEvents();
    }, []);

    return (
        <Fragment>
            <Row xs={1} sm={1} md={1} lg={1} xl={1} className="my-5" key="events">
                <h1 className="text-white">Events</h1>
                <Col >
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 4,
                                partialVisibilityGutter: 0,
                                slidesToSlide: 4
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30,
                                slidesToSlide: 1
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 1,
                                partialVisibilityGutter: 30,
                                slidesToSlide: 1
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        swipeable
                    >    
                        {Array.from(events)?.map(({ event_name, event_description, id, media_location_url }) => (
                            <Card style={{ height: '13rem' }} className="mx-2 bg-dark text-white" key={id}>
                                <Card.Link className="event-card card-info"href={`/event/${id}`}>
                                    <Card.Img src={media_location_url}/>
                                    <Card.Body className="event-card">
                                        <Card.Title>
                                            {event_name}
                                        </Card.Title>
                                        <Card.Text>
                                            {event_description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card.Link>
                            </Card>
                        ))}   
                    </Carousel>
                </Col>
            </Row>
        </Fragment>
    )
}

export default EventCarousel;