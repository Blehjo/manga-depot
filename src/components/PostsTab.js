import { Fragment, useState, useEffect } from "react";
import { Card, Col, Row, Button, Form, Modal } from "react-bootstrap";
import axios from "axios";

import { utcConverter } from "../utils/date/Date";

import EditPost from "./EditPost";

const PostsTab = () => {
    const [posts, setPosts] = useState([]);
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState('');
    const [writtenText, setWrittenText] = useState('');
    const [mediaUrl, setMediaUrl] = useState();
    const [showEdit, setShowEdit] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    function handlePostChange(event) {
        event.preventDefault();
        setWrittenText(event.target.value);
    }
    
    function handleMediaChange(event) {
        event.preventDefault();
        setMediaUrl(event.target.value);
    }

    async function post() {
        await axios.post('/api/posts/', {
            written_text: writtenText,
            media_location_url: mediaUrl,
        });
    }

    const deletePost = async (event) => {
        await axios.delete(`/api/posts/${event.target.id}`);
    }

    function handleTextChange(event) {
        event.preventDefault();
        setCommentText(event.target.value);
    }

    async function postComment(event) {
        await axios.post('/api/comments/', {
            post_id: event.target.id,
            comment_text: commentText,
        });
    }
    
    useEffect(() => {
        const getPosts = async () => {
            await axios.get(`/api/posts/`, {
                mode: 'no cors'
            })
            .then((resp) => setPosts(resp.data)); 
        }
        getPosts();
    }, [])

    useEffect(() => {
        const getComments = () => {
            axios.get(`/api/comments/`,
        {
            mode: 'no-cors',
        })
        .then((response) => setComments(response.data));
        } 
        getComments();
    }, []);

    return (
        <Fragment>
            <Form onSubmit={post}>
                <Row style={{ marginBottom: '3rem', justifyContent: 'center' }} xs={2}>
                    <Col xs={10} >
                        <Form.Control className="mb-3" onChange={handleMediaChange} type='text' placeholder="Media Url"/>
                        <Form.Control as="textarea" onChange={handlePostChange} placeholder=" Write your post here" />
                    </Col>
                    <Col xs={2}>
                        <Button style={{ width: '100%', height: '100%'}} variant="light" type="submit">
                            Post
                        </Button>
                    </Col>                
                </Row>
            </Form>
            {posts?.length > 0 ? posts?.map(({ id, media_location_url, written_text, created_date_time, postcomments }) => (
                <>
                <Card key={id} style={{ color: 'white' }} className="bg-dark mb-4">
                    <Card.Img src={media_location_url}/>
                    <Card.Body>
                        <Card.Title>{written_text}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <Row xs={2}>
                            <Col xs={8}>
                                <Card.Text>{utcConverter(created_date_time)}</Card.Text>
                            </Col>
                            <Col style={{ justifyContent: 'end'}} xs={4}>
                                <Row xs={2}>
                                    <Col>
                                        <Card.Text id={id} style={{ cursor: 'pointer' }} onClick={deletePost}>Delete</Card.Text>
                                    </Col>
                                    <Col>
                                        <Card.Text id={id} style={{ cursor: 'pointer' }} onClick={handleShowEdit}>Edit</Card.Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Footer>
                    <Card.Footer>
                        <Card.Text id={id} style={{ cursor: 'pointer' }} onClick={handleShow}>Comment</Card.Text>
                    </Card.Footer>
                </Card>
                <Modal show={showEdit} onHide={handleCloseEdit}>
                    <EditPost props={id} />
                </Modal>
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
                </>
            )) : 
            <Card style={{ color: 'white', textAlign: 'center' }}className="bg-dark">
                <Card.Title>"Stay tuned. Currently no posts..."</Card.Title>
            </Card>
            }
        </Fragment>
    );
}

export default PostsTab;