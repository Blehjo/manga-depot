import React, { useState, useEffect, Profiler } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons';
import utcConverter from "../../utils/Date";
import { useParams } from "react-router-dom";

const Post = () => {
    const [post, setPost] = useState([]);
    const { id, profile_id } = useParams();
    
    function getPost() {
        axios.get(`http://localhost:3001/api/posts/${profile_id}/${id}`,
        {
            mode: 'no-cors',
        })
        .then((response) => setPost(response.data));
    }

    useEffect(() => {
        getPost();
    }, [id, profile_id]); 

    console.log(`profile_id: ${profile_id}, id: ${id}, post: ${post}`);

    return (
        <div className="queries-container">
        <h1>{profile_id}</h1>
            <Row xs={1} sm={1} md={1} lg={1} xl={1} className=" g-4 pt-3" key="groups">
                <Col>
                    <Card style={{ }} className="groups mx-2 mb-5 bg-dark card-container" key={post[0].id}>
                        <div className='card-container'>
                        <Card.Link className='card-info' href={`/posts/${post[0].id}`}>
                            {<Card.Img  style={{ objectFit:'cover'}} variant="top" src={`${post[0].media_location_url ? post[0].media_location_url : "https://www.museothyssen.org/sites/default/files/styles/full_resolution/public/imagen/2019-10/PICASSO%2C%20Pablo%20Ruiz_Corrida%20de%20toros_706%20%281976.83%29_FOTOH%20%23F21.jpg"}`} />}
                        </Card.Link>
                        <Card.ImgOverlay>
                            <Card.Text className="icon2">
                                <FontAwesomeIcon className="icon-item" icon={faHeart} />
                                <FontAwesomeIcon className="icon-item" icon={faCommentAlt} />
                                <FontAwesomeIcon className="icon-item" icon={faRetweet} />
                            </Card.Text>
                        </Card.ImgOverlay>
                        </div>
                        <Card.Body className=''>
                            <Card.Subtitle>{post[0].written_text}</Card.Subtitle>
                            <Card.Text>{`Posted ${utcConverter(post[0].created_date_time)}`}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Post;