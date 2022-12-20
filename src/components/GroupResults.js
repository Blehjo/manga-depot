import { useState, useContext, useEffect } from "react";
import { Row, Col, Card, Badge, Modal, Button, Form } from "react-bootstrap";
import { utcConverter } from "../utils/date/Date";
import { GroupResultContext } from "../contexts/groupresult.context";
import { useNavigate } from "react-router";
import axios from "axios";

const GroupResults = () => {
    const [show, setShow] = useState(false);
    const [groups, setGroups] = useState([]);
    const [modalImage, setModalImage] = useState('');
    const [modalValue, setModalValue] = useState('');
    const [errorMessage, setErrorMessage] = useState([]);
    const { groupResults } = useContext(GroupResultContext);
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setGroups(groupResults);
    }, [groupResults])

    function handleClickEvent(event) {
        event.preventDefault();
        navigate(`/groups/${event.target.id}/${event.target.className}`);
    }

    function handleModalImage(event) {
        event.preventDefault();
        setModalImage(event.target.id);
        handleShow();
    }

    function handleModalChange(event) {
        event.preventDefault();
        setModalValue(event.target.value);
    }

    function postGroup(event) {
        event.preventDefault();
        async function getInfo() {
            await axios.post('/api/posts/', {
                written_text: modalValue,
                media_location_url: modalImage
            })
            .catch(err => {
                setErrorMessage(err);
                console.error(errorMessage);
            });
        }
        getInfo();
        handleClose();
    }

    function joinGroup(event) {
        event.preventDefault();
        async function getInfo() {
            await axios.post('/api/groups/', {
                title: event.target.className,
                media_location_url: `https://images.igdb.com/igdb/image/upload/t_1080p/${event.target.id}.jpg`
            })
            .catch(err => {
                setErrorMessage(err);
                console.error(errorMessage);
            });
        }
        getInfo();
    }

    return (
        <Row xs={1} sm={1} md={1} lg={2} xl={3} className="g-4 pt-3" key="groups">
            {groups?.map(({ id, group_name, profile_id, groupmembers, group_description, country, platform, created_date_time, media_location_url }) => (
                <Col key={id}>
                    <Card key={id} className="groups mx-2 mb-5 bg-dark card-container" >
                            <Card.Img key={profile_id} style={{ objectFit:'cover'}} variant="top" src={`${media_location_url ? media_location_url : "https://www.museothyssen.org/sites/default/files/styles/full_resolution/public/imagen/2019-10/PICASSO%2C%20Pablo%20Ruiz_Corrida%20de%20toros_706%20%281976.83%29_FOTOH%20%23F21.jpg"}`} />
                            <Card.ImgOverlay>
                                <div  id={media_location_url} onClick={joinGroup} className={group_name} key={created_date_time}>
                                    Join
                                </div>
                                <div id={media_location_url} className={group_name} onClick={handleModalImage}>
                                    Post
                                </div>
                                <div id={id} className={media_location_url} onClick={handleClickEvent}>
                                    Look
                                </div>
                            </Card.ImgOverlay>
                        <Card.Body className=''>
                            <Card.Text>{group_description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Text key={country} >{country}</Card.Text>
                            <Card.Text key={created_date_time} >{utcConverter(created_date_time)}</Card.Text>
                            <Badge key={platform} pill bg="primary">
                                {`${platform}`}
                            </Badge>
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
            <Modal  show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Post Game</Modal.Title>
                </Modal.Header>
                <Form style={{ backgroundColor: 'black' }} onSubmit={postGroup}>
                    <Card >
                        <Card.Img id={`https://images.igdb.com/igdb/image/upload/t_1080p/${modalImage}.jpg`} src={`https://images.igdb.com/igdb/image/upload/t_1080p/${modalImage}.jpg`}/>
                    </Card>
                    <Modal.Body>
                            <Form.Group
                            className="mb-3"
                            controlId="ControlTextarea"
                            >
                            <Form.Label>Write your thoughts on the game here</Form.Label>
                            <Form.Control value={modalValue} onChange={handleModalChange} as="textarea" rows={3} />
                            </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="dark" type="submit">
                            Post
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </Row>
    );
}

export default GroupResults;