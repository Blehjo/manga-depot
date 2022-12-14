import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router";
import axios from "axios";

import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCommentAlt, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons';
import { utcConverter } from "../../utils/date/Date";

const Posts = () => {
    const [posts, setPosts] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getPosts = () => {
            axios.get(`/api/posts/${id}`,
        {
            mode: 'no-cors',
        })
        .then((response) => setPosts(response.data));
        } 
        getPosts();
    }, [id]);

    return (
        <Fragment>
            <h1>Posts</h1>
            <Row xs={1} sm={1} md={1} lg={1} xl={1} className=" g-4 pt-3" key="posts">
                {Array.from(posts)?.map(({ id, profile_id, written_text, created_date_time }) => (
                    <Col>
                        <Card style={{ }} className="groups mx-2 mb-5 bg-dark card-container" key={id}>
                            <div className='card-container'>
                            <Card.Link className='card-info' href={`/${id}`}>
                                {<Card.Img  style={{ objectFit:'cover'}} variant="top" src={`${"https://www.museothyssen.org/sites/default/files/styles/full_resolution/public/imagen/2019-10/PICASSO%2C%20Pablo%20Ruiz_Corrida%20de%20toros_706%20%281976.83%29_FOTOH%20%23F21.jpg"}`} />}
                            </Card.Link>
                            <Card.ImgOverlay>
                                <Card.Text className="icon2">
                                    <FontAwesomeIcon className="icon-item" icon={faHeart} />
                                    <FontAwesomeIcon className="icon-item" icon={faCommentAlt} />
                                    <FontAwesomeIcon className="icon-item" icon={faRetweet} />
                                    <Card.Link href={`/posts/${profile_id}/${id}`}>
                                        <FontAwesomeIcon className="icon-item" icon={faEye} />
                                    </Card.Link>
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
        </Fragment>
    )
}

export default Posts;