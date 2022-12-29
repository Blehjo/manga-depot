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
        <Row xs={1} className="my-5" key="genres">
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
                            items: 3,
                            partialVisibilityGutter: 0,
                            slidesToSlide: 3
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
                                className="mx-2 bg-dark" 
                                key={id}
                            >
                                <Card.Img  style={{ position: 'relative', borderRadius: ".5rem", width: "100%", height: "auto", objectFit: "cover" }} src={media_location_url} alt={group_name}/>
                                <Card.ImgOverlay style={{ textAlign: 'center', width: 'auto', height: 'auto', position: 'absolute', top: '50%', left: '50%', borderRadius: '.5rem', transform: 'translate(-50%, -50%)' }} >
                                    <Card.Title >{group_name}</Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                            </Card.Link>
                        </Col>
                    ))} 
                </Carousel>
            </Col>
        </Row>
    )
}

export default GroupCarousel;