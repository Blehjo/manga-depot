import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Col, Card, Modal, Form, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { utcConverter } from "../../utils/date/Date";

const PostCarousel = () => {
    const [posts, setPosts] = useState([]);
    const [commentText, setCommentText] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleTextChange(event) {
        event.preventDefault();
        setCommentText(event.target.value);
    }

    async function postComment(event) {
        await axios({
            method: 'post',
            url: 'https://shellgeistapi.herokuapp.com/api/comments/',
            data: {
                post_id: event.target.id,
                comment_text: commentText,
            },
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
    }

    useEffect(() => {
        async function getPosts() {
            await axios({
                method: 'get',
                url: 'https://shellgeistapi.herokuapp.com/posts', 
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            .then((response) => setPosts(response.data));
        }

        getPosts();
    }, []);
    
    return (
        <Row xs={1} className="my-5" key="genres">
            <h1 style={{ color: 'white' }}>Posts</h1>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass=""
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
                {posts?.map(({ postcomments, created_date_time, id, media_location_url, profile_id, written_text, userprofile }) => (
                    <div key={id}>
                    <Card className="mx-3 bg-dark " key={id}>
                        <Card.Img src={media_location_url} />
                        <Card.Link style={{ textDecoration: 'none' }} href={`/profile/${profile_id}`}>
                            <Card.Title style={{ color: 'white', textAlign: 'center', marginTop: '.7rem'}} >{userprofile.username}</Card.Title>
                        </Card.Link>
                            <Card.Body >
                                <Card.Subtitle>{written_text}</Card.Subtitle>
                            </Card.Body>
                        <Card.Footer>
                            <Row xs={2}>
                                <Col>
                                    Posted: {utcConverter(created_date_time)}
                                </Col>
                                <Col>
                                    <Card.Text id={id} onClick={handleShow}>Comment</Card.Text>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                    <Modal show={show} onHide={handleClose}>
                        <Card  className="bg-dark" key={id}>
                            <div className='card-container'>
                            <Card.Link className='card-info' href={`posts/${id}`}>
                                {media_location_url && <Card.Img  style={{ objectFit:'cover'}} variant="top" src={media_location_url} />}
                            </Card.Link>
                            </div>
                            <Card.Body >
                                <Card.Subtitle style={{ color: 'white' }}>{written_text}</Card.Subtitle>
                                <Card.Text>{`Posted ${utcConverter(created_date_time)}`}</Card.Text>
                            </Card.Body>
                            <Card.Body style={{ height: '200px', overflowY: 'auto' }}>
                                {Array.from(postcomments)?.map(({ id, profile_id, comment_text, created_date_time }) => (
                                    <Col key={id} className="bg-dark" id={id}>
                                        <Card.Text>{comment_text}</Card.Text>
                                        <Card.Text>{utcConverter(created_date_time)}</Card.Text>
                                    </Col>
                                ))}
                            </Card.Body>
                            <Card.Footer>
                                <Form id={id} onSubmit={postComment}>
                                <Row style={{ marginBottom: '3rem', justifyContent: 'center' }} xs={2}>
                                    <Col xs={9} >
                                        <Form.Control as="textarea" onChange={handleTextChange} placeholder=" Write your comment here" />
                                    </Col>
                                    <Col xs={3}>
                                        <Button id={id} style={{ width: '100%', height: '100%'}} variant="light" type="submit">
                                            Post
                                        </Button>
                                    </Col>                
                                </Row>
                                </Form>
                            </Card.Footer>
                        </Card>
                    </Modal>
                    </div>
                ))} 
            </Carousel>
        </Row>
    )
}

export default PostCarousel;