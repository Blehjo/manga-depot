import React, { Fragment } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { utcConverter } from "../../utils/date/Date";

const PostCarousel = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            await axios.get('/posts', {
                mode: 'no-cors'
            })
            .then((response) => setPosts(response.data));
        }

        getPosts();
    }, []);
    
    return (
        <Fragment>
            <Row xs={1} sm={1} md={1} lg={1} xl={1} className="g-4 pt-3" key="genres">
                <h1 className="text-white">Posts</h1>
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
                        {posts?.map(({ created_date_time, id, media_location_url, profile_id, written_text, userprofile }) => (
                            <Card className="mx-2 bg-dark text-white h-100" key={id}>
                                <Card.Img src={media_location_url} />
                                <Card.Link href={`/profile/${profile_id}`}>
                                    <Card.Title>{userprofile.username}</Card.Title>
                                </Card.Link>
                                    <Card.Body >
                                        <Card.Subtitle>{written_text}</Card.Subtitle>
                                    </Card.Body>
                                <Card.Footer>Posted: {utcConverter(created_date_time)}</Card.Footer>
                            </Card>
                        ))} 
                    </Carousel>
                </Col>
            </Row>
        </Fragment>
    )
}

export default PostCarousel;