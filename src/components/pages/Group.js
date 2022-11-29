import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons';
import { utcConverter } from "../../utils/Date";
import { useParams } from "react-router-dom";

const Group = () => {
    const [group, setGroup] = useState({});
    const { id } = useParams();
    
    function getGroup() {
        axios.get(`http://localhost:3001/api/groups/${id}`,
        {
            mode: 'no-cors',
        })
        .then((response) => setGroup(response.data));
    }

    useEffect(() => {
        getGroup();
    }, []);

    return (
            <div className="queries-container">
                <h1>Groups</h1>
                <Row xs={1} sm={1} md={1} lg={1} xl={1} className=" g-4 pt-3" key="groups">
                    <Col>
                        <Card style={{ }} className="groups mx-2 mb-5 bg-dark card-container" key={group.id}>
                            <div className='card-container'>
                            <Card.Link className='card-info' href={`/${group.id}`}>
                                {<Card.Img  style={{ objectFit:'cover'}} variant="top" src={`${"https://www.museothyssen.org/sites/default/files/styles/full_resolution/public/imagen/2019-10/PICASSO%2C%20Pablo%20Ruiz_Corrida%20de%20toros_706%20%281976.83%29_FOTOH%20%23F21.jpg"}`} />}
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
                                <Card.Subtitle>{group.written_text}</Card.Subtitle>
                                <Card.Text>{`Posted ${utcConverter(group.created_date_time)}`}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
    )
}

export default Group;