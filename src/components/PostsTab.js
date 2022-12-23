import { Fragment, useState, useEffect } from "react";
import { Card, Col, Row, Button, Form } from "react-bootstrap";
import axios from "axios";

import { utcConverter } from "../utils/date/Date";

const PostsTab = () => {
    const [posts, setPosts] = useState([]);
    const [writtenText, setWrittenText] = useState('');
    const [mediaUrl, setMediaUrl] = useState();

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
                <Row style={{ marginBottom: '3rem', justifyContent: 'center' }} md={1} lg={2} xl={2}>
                    <Col lg={8}xl={8} >
                        <Form.Control className="mb-3" onChange={handleMediaChange} type='text' placeholder="Media Url"/>
                        <textarea type="textarea" onChange={handlePostChange} placeholder=" Write your post here" style={{ width: '100%'}}/>
                    </Col>
                    <Col xl={2}>
                        <Button style={{ height: '100%'}} variant="dark" type="submit">
                            Submit
                        </Button>
                    </Col>                
                </Row>
            </Form>
            {posts?.length > 0 ? posts?.map(({ id, media_location_url, written_text, created_date_time }) => (
                <Card key={id} style={{ color: 'white' }} className="bg-dark mb-4">
                    <Card.Img src={media_location_url}/>
                    <Card.Body>
                        <Card.Title>{written_text}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        {utcConverter(created_date_time)}
                    </Card.Footer>
                </Card>
            )) : 
            <Card style={{ color: 'white', textAlign: 'center' }}className="bg-dark">
                <Card.Title>"Stay tuned. Currently no posts..."</Card.Title>
            </Card>
            }
        </Fragment>
    );
}

export default PostsTab;