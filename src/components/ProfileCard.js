import axios from "axios";
import { Fragment, useState } from "react";
import { Card, Row, Col, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/user/user.selector";

import CreateGroup from "./CreateGroup";

const ProfileCard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const currentUser = useSelector(selectCurrentUser);
    const { media_location, username, first_name, country, about } = currentUser;
    console.log("User: ", currentUser)
    const deleteGroup = async (event) => {
        await axios.delete(`https://shellgeistapi.herokuapp.com/api/groups/${event.target.id}`);
    }

    const deleteGame = async (event) => {
        await axios.delete(`https://shellgeistapi.herokuapp.com/api/games/${event.target.id}`);
    }

    return (
        <Fragment>
            <Card style={{ color: 'white' }} className="bg-dark" key={'id'}>
                <Card.Img variant="top" src={media_location ? media_location : "https://www.cooperhewitt.org/wp-content/uploads/2018/07/20914_472d45b4ae377c5f_b1.jpg"} /> 
                <Card.Body>
                    <Card.Title>{username}</Card.Title>
                    <Card.Subtitle>{first_name}</Card.Subtitle>
                    <Card.Text>{country}</Card.Text> 
                    <Card.Subtitle>{about}</Card.Subtitle>
                    {/* {userposts.length > 0 && <><Card.Title href={`/posts`}>Posts</Card.Title>
                    <Card.Text>{userposts.length}</Card.Text></>} */}
                    <Row xs={1}>
                        <Col style={{ marginBottom: '1rem' }} xs={12}>
                            <Card.Title>Shells</Card.Title>
                        </Col>
                        <Col style={{ position: 'relative' }} xs={12}>
                            <Card.Title style={{ position: 'absolute', bottom: '0', fontSize: '75%', cursor: 'pointer' }} show={show} onHide={handleClose} onClick={handleShow}>Create a shell</Card.Title>
                        </Col>
                    </Row>
                    {/* {groups?.length > 0 && groups?.map(({ id, group_name, media_location_url }) => (
                        <Row xs={3} >
                            <Col xs={9} >
                                <Card.Link style={{ textDecoration: 'none' }} href={`/groups/${id}`}>
                                    <Row xs={2} >
                                    <Col xs={1} >
                                        <Card.Img style={{ width: '1.2rem' }} src={media_location_url}/>
                                    </Col>
                                    <Col style={{ position: 'relative' }} xs={10} >
                                        <Card.Text style={{ position: 'absolute', bottom: '0' }}>{group_name}</Card.Text>
                                    </Col>
                                    </Row>
                                </Card.Link>
                            </Col>
                            <Col xs={3} >
                                <Card.Text id={id} onClick={deleteGroup}>Delete</Card.Text>
                            </Col>
                        </Row>
                    ))}
                    {friendships?.length > 0 ?
                    <>
                     <Card.Title style={{ marginTop: '1rem' }} >Mates</Card.Title>
                        <Row >
                            <Col xs={10}>
                                <Card.Text>{friendships.length}</Card.Text>
                            </Col>
                        </Row>
                    </>
                    : (
                        <Row >
                            <Col>
                                <Card.Text show={show} onHide={handleClose} onClick={handleShow}>Follow mates</Card.Text>
                            </Col>
                        </Row>
                    )}
                    <Card.Footer>
                    <Card.Title>Games</Card.Title>
                    {games?.length > 0 ? games?.map(({ id, media_location_url, title}) => (
                        <Row xs={3} >
                        <Col xs={9} >
                        <Card.Link style={{ textDecoration: 'none' }} href={`/games/${id}`}>
                        <Row xs={2} >
                        <Col xs={1} >
                        <Card.Img style={{ width: '1rem'}} src={media_location_url} />
                        </Col>
                        <Col xs={10} style={{ position: 'relative' }}>
                        <Card.Text style={{ position: 'absolute', bottom: '0' }}>{title}</Card.Text>
                        </Col>
                        </Row>
                        </Card.Link>
                        </Col>
                        <Col xs={3}>
                        <Card.Text id={id} style={{ cursor: 'pointer' }} onClick={deleteGame}>Delete</Card.Text>
                        </Col>
                        </Row>
                        )) : (
                            <Card.Text>No Games</Card.Text>
                            )}     
                        </Card.Footer> */}
                        </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <CreateGroup />
            </Modal>
        </Fragment>
    )
}

export default ProfileCard;