import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons';
import { utcConverter } from "../../utils/date/Date";
import { useParams } from "react-router-dom";

const Post = () => {
    const [post, setPost] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        async function getPost() {
            await axios.get(`/api/posts/${id}`,
            {
                mode: 'no-cors',
            })
            .then((response) => setPost(response.data));
        }
        getPost();
    }, [id]); 

    return (
        <div className="queries-container">
            <Row xs={1} sm={1} md={1} lg={1} xl={1} className=" g-4 pt-3" key="groups">
                {Array.from(post).map(({ written_text, media_location_url, created_date_time }) => (
                    <Col>
                    <Card className="groups mx-2 mb-5 bg-dark card-container" key={id}>
                        <div className='card-container'>
                        <Card.Link className='card-info' href={`/posts/${id}`}>
                            <Card.Img  style={{ objectFit:'cover'}} variant="top" src={`${media_location_url ? media_location_url : "https://www.museothyssen.org/sites/default/files/styles/full_resolution/public/imagen/2019-10/PICASSO%2C%20Pablo%20Ruiz_Corrida%20de%20toros_706%20%281976.83%29_FOTOH%20%23F21.jpg"}`} />
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
                            <Card.Subtitle>{written_text}</Card.Subtitle>
                            <Card.Text>{`Posted ${utcConverter(created_date_time)}`}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </div>
    )
}

export default Post;