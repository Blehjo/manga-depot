import { useState } from "react";
import { Row, Col, Card, Badge, Modal, Button, Form } from "react-bootstrap";
import { unixConverter } from "../utils/date/Date";

import { useNavigate } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectResultItems } from "../store/result/result.selector";


const GameResults = () => {
    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState([]);
    const [modalImage, setModalImage] = useState('');
    const [modalValue, setModalValue] = useState('');
    const gameList = useSelector(selectResultItems);

    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleClickEvent(event) {
        event.preventDefault();
        navigate(`/games/${event.target.id}/${event.target.className}`);
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

    function postGame(event) {
        event.preventDefault();
        async function getInfo() {
            await axios.post('https://shellgeistapi.herokuapp.com/api/posts/', {
                written_text: modalValue,
                media_location_url: `https://images.igdb.com/igdb/image/upload/t_1080p/${modalImage}.jpg`
            })
            .catch(err => {
                setErrorMessage(err);
                console.error(errorMessage);
            });
        }
        getInfo();
        handleClose();
    }

    function addToCatalogue(event) {
        event.preventDefault();
        async function getInfo() {
            await axios.post('https://shellgeistapi.herokuapp.com/api/games/', {
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
        <Row xs={1} lg={2} xl={3} className="g-4 pt-3" key="groups">
            {gameList?.map(({ id, name, platforms, first_release_date, cover, age_ratings, summary }) => (
                <Col key={cover?.image_id}>
                    <Card key={cover?.image_id} className="text-white mx-2 mb-5 bg-dark" >
                            <Card.Img key={age_ratings} style={{ objectFit:'cover'}} variant="top" src={`https://images.igdb.com/igdb/image/upload/t_1080p/${cover?.image_id}.jpg`} />
                            <Card.ImgOverlay>
                                <div  id={cover?.image_id} style={{ cursor: 'pointer' }} onClick={addToCatalogue} className={name} key={first_release_date}>
                                    {/* {games?.some(({ title }) => title == name) ? 'Added' : 'Add'} */}
                                </div>
                                <div id={cover?.image_id} style={{ cursor: 'pointer' }} className={name} onClick={handleModalImage}>
                                    Post
                                </div>
                                <div id={id} style={{ cursor: 'pointer' }} className={cover?.image_id} onClick={handleClickEvent}>
                                    Look
                                </div>
                            </Card.ImgOverlay>
                        <Card.Body className=''>
                            <Row >
                            {platforms?.slice(0, 5).map(({ abbreviation }) => (
                                <Col>
                                    <Badge key={abbreviation} style={{ color: 'black', marginBottom: '1rem' }} pill bg="light">
                                        {`${abbreviation}`}
                                    </Badge>
                                </Col>
                            ))}
                            {platforms?.length > 5 &&
                                <Col xs={12}>
                                    {platforms?.length} More Platforms
                                </Col>
                            }
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Text key={first_release_date} >{unixConverter(first_release_date)}</Card.Text>
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
            <Modal  show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Post Game</Modal.Title>
                </Modal.Header>
                <Form style={{ backgroundColor: 'black' }} onSubmit={postGame}>
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

export default GameResults;