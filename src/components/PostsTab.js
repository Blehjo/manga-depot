import { Fragment, useState, useEffect } from "react";
import { Card, Col, Row, Button, Form, Modal } from "react-bootstrap";
import axios from "axios";

import { utcConverter } from "../utils/date/Date";

import EditPost from "./EditPost";

const PostsTab = () => {
    const [posts, setPosts] = useState([]);
    const [writtenText, setWrittenText] = useState('');
    const [mediaUrl, setMediaUrl] = useState();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
    
    useEffect(() => {
        const getPosts = async () => {
            await axios.get(`/api/posts/`, {
                mode: 'no cors'
            })
            .then((resp) => setPosts(resp.data)); 
        }
        getPosts();
    }, [])

    return (
        <Fragment>
            <Form onSubmit={post}>
                <Row style={{ marginBottom: '3rem', justifyContent: 'center' }} xs={2}>
                    <Col xs={10} >
                        <Form.Control className="mb-3" onChange={handleMediaChange} type='text' placeholder="Media Url"/>
                        <Form.Control as="textarea" onChange={handlePostChange} placeholder=" Write your post here" />
                    </Col>
                    <Col xs={2}>
                        <Button style={{ width: '100%', height: '100%'}} variant="dark" type="submit">
                            Post
                        </Button>
                    </Col>                
                </Row>
            </Form>
            {posts?.length > 0 ? posts?.map(({ id, media_location_url, written_text, created_date_time }) => (
                <>
                <Card key={id} style={{ color: 'white' }} className="bg-dark mb-4">
                    <Card.Img src={media_location_url}/>
                    <Card.Body>
                        <Card.Title>{written_text}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Text id={id} onClick={deletePost}>Delete</Card.Text>
                        <Card.Text id={id} onClick={handleShow}>Edit</Card.Text>
                        <Card.Text>{utcConverter(created_date_time)}</Card.Text>
                    </Card.Footer>
                </Card>
                <Modal show={show} onHide={handleClose}>
                    <EditPost props={id} />
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