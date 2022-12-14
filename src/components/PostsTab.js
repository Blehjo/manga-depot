import { Fragment, useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

import { utcConverter } from "../utils/date/Date";

const PostsTab = () => {
    const [posts, setPosts] = useState();
    
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
            {posts ? posts?.map(({ id, media_location_url, written_text, created_date_time }) => (
                <Card key={id} style={{ color: 'white' }} className="bg-dark">
                    <Card.Img src={media_location_url}/>
                    <Card.Body>
                        <Card.Title>{written_text}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        {utcConverter(created_date_time)}
                    </Card.Footer>
                </Card>
            )) : 
            <Card style={{ color: 'white' }}className="bg-dark">
                <Card.Title>"Stay tuned. Currently no posts..."</Card.Title>
            </Card>
            }
        </Fragment>
    );
}

export default PostsTab;