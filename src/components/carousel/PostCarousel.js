import React, { Fragment } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

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
                <h1 className="text-white">Groups</h1>
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
                        {genres?.map((genre) => (
                                <Card className="mx-2 bg-dark text-white h-100" key={genre.id}>
                                    <Card.Link className="genre-card card-info"href={`/genre/${genre.name}`}>
                                        <Card.Body className="genre-card">
                                            <Card.Title>
                                                    {genre.name}
                                            </Card.Title>
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

export default PostCarousel;