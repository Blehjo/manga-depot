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
            <Row xs={1}  className="my-5" key="events">
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
                                    max: 764,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30,
                                slidesToSlide: 1
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 764
                                },
                                items: 2,
                                partialVisibilityGutter: 30,
                                slidesToSlide: 2
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
                        {Array.from(events)?.map(({ event_name, id, media_location_url }) => (
                            <Card style={{ borderRadius: "1rem", height: '13rem' }} className="mx-2 bg-dark text-white" key={id}>
                                <Card.Link className="event-card card-info"href={`/event/${id}`}>
                                    <Card.Img style={{ position: 'relative',  width: "100%", height: "25rem", objectFit: "cover" }} variant="top" src={media_location_url} alt={event_name}/>
                                    <Card.ImgOverlay style={{  }}>
                                    <div style={{ textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', width: 'auto', height: 'auto', position: 'absolute', top: '50%', left: '50%', borderRadius: '.5rem', transform: 'translate(-50%, -50%)' }} className="text-white">
                                        <Card.Title style={{ fontSize: '200%' }}>{event_name}</Card.Title>
                                    </div>
                                    </Card.ImgOverlay>
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