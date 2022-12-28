import { Fragment } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const GroupCarousel = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        async function getGroups() {
            await axios.get("/groups",
            {
                mode: 'no-cors',
            })
            .then((response) => setGroups(response.data));
        }
        getGroups();
    }, []);

    return (
        <Fragment>
            <Row xs={1} sm={1} md={1} lg={1} xl={1} className="g-4 pt-3" key="genres">
                <h1 href='/groups' className="text-white">Groups</h1>
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
                        {groups?.map(({ id, group_name, media_location_url, description }) => (
                            <Col key={id}>
                                <Card.Link href={`/groups/${id}`}>
                                <Card 
                                    style={{ color: 'white' }} 
                                    className="mx-2 my-5 bg-dark card-container" 
                                    key={id}
                                >
                                    <Card.Img  style={{ position: 'relative', borderRadius: ".5rem", width: "100%", height: "25rem", objectFit: "cover" }} variant="top" src={media_location_url} alt={group_name}/>
                                    <Card.ImgOverlay >
                                    <div style={{ width: '100%', position: 'absolute', top: '50%', left: '50%', borderRadius: '.5rem', transform: 'translate(-35%, -50%)' }} className="text-white">
                                        <Card.Title style={{ fontSize: '400%' }}>{group_name}</Card.Title>
                                    </div>
                                    </Card.ImgOverlay>
                                </Card>
                                </Card.Link>
                            </Col>
                        ))} 
                    </Carousel>
                </Col>
            </Row>
        </Fragment>
    )
}

export default GroupCarousel;