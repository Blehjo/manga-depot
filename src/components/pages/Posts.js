import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router";
import axios from "axios";

import { Row, Col, Card, Modal, Button, Form } from "react-bootstrap";
import { utcConverter } from "../../utils/date/Date";

const Posts = () => {
    const [posts, setPosts] = useState({});
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState('');
    const { id } = useParams();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleTextChange(event) {
        event.preventDefault();
        setCommentText(event.target.value);
    }

    async function postComment(event) {
        await axios.post('https://shellgeistapi.herokuapp.com/api/comments/', {
            post_id: event.target.id,
            comment_text: commentText,
        });
    }

    useEffect(() => {
        const getPosts = () => {
            axios.get(`https://shellgeistapi.herokuapp.com/api/posts/`,
        {
            mode: 'no-cors',
            withCredentials: true 
        })
        .then((response) => setPosts(response.data));
        } 
        getPosts();
    }, [id]);

    useEffect(() => {
        const getComments = () => {
            axios.get(`https://shellgeistapi.herokuapp.com/api/comments/`,
        {
            mode: 'no-cors',
            withCredentials: true 
        })
        .then((response) => setComments(response.data));
        } 
        getComments();
    }, [id]);

    return (
        <Fragment>
            <h1 style={{ color: 'white' }}>Posts</h1>
            <Row xs={1} md={3} className=" g-4 pt-3" key="posts">
                {Array.from(posts)?.map(({ id, profile_id, written_text, created_date_time, media_location_url, postcomments }) => (
                    <Fragment key={id}>
                    <Col>
                        <Card style={{ }} className="bg-dark" key={id}>
                            <div className='card-container'>
                            <Card.Link className='card-info' href={`posts/${id}`}>
                                {media_location_url && <Card.Img  style={{ objectFit:'cover'}} variant="top" src={media_location_url} />}
                            </Card.Link>
                            </div>
                            <Card.Body style={{ color: 'white' }} >
                                <Card.Subtitle>{written_text}</Card.Subtitle>
                                <Card.Text>{`Posted ${utcConverter(created_date_time)}`}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Text id={id} onClick={handleShow}>Comment</Card.Text>
                            </Card.Footer>
                        </Card>
                    </Col>
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
                    </Fragment>
                ))}
            </Row>
        </Fragment>
    )
}

export default Posts;