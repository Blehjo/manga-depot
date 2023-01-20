import { Fragment, useState, useEffect, useContext } from "react";
import { Card, Modal, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

import { utcConverter } from "../utils/date/Date";
import { useParams } from "react-router";

const UserPostsTab = () => {
    const [posts, setPosts] = useState([]);
    const [commentText, setCommentText] = useState('');
    const { id } = useParams();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function postComment(event) {
        await axios.post('https://shellgeistapi.herokuapp.com/api/comments/', {
            post_id: event.target.id,
            comment_text: commentText,
        });
    }

    function handleTextChange(event) {
        event.preventDefault();
        setCommentText(event.target.value);
    }

    useEffect(() => {
        const getPosts = async () => {
            await axios.get(`/posts/${id}`, {
                mode: 'no cors'
            })
            .then((resp) => setPosts(resp.data)); 
        }
        getPosts();
    }, [])

    console.log(posts);

    return (
        <Fragment>
            {posts?.length > 0 ? posts?.map(({ id, media_location_url, written_text, created_date_time, postcomments }) => (
                <>
                <Card key={id} style={{ color: 'white', marginBottom: '1rem' }} className="bg-dark">
                    <Card.Img src={media_location_url}/>
                    <Card.Body>
                        <Card.Title>{written_text}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        {utcConverter(created_date_time)}
                    </Card.Footer>
                    <Card.Footer>
                        <Card.Text id={id} onClick={handleShow}>Comment</Card.Text>
                    </Card.Footer>
                </Card>
                <Modal show={show} onHide={handleClose}>
                <Card className="bg-dark" key={id}>
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
                                <Col style={{ marginBottom: '1rem' }} key={id} className="bg-dark" id={id}>
                                    <Card.Text style={{ marginBottom: '-.3rem' }}>{comment_text}</Card.Text>
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
            <Card style={{ color: 'white', textAlign: 'center' }} className="bg-dark">
                <Card.Title>"Stay tuned. Currently no posts..."</Card.Title>
            </Card>
            }
        </Fragment>
    );
}

export default UserPostsTab;