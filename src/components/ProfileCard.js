import { Fragment, useContext, useState } from "react";
import { Card, Row, Col, Modal } from "react-bootstrap";
import { AuthContext } from "../contexts/auth.context";
import CreateGroup from "./CreateGroup";

const ProfileCard = () => {
    const { auth } = useContext(AuthContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Fragment>
            {auth?.map(({ id, about, first_name, country, friendships, games, media_location, username, userposts, groups }) => (
            <Card style={{ color: 'white' }} className="bg-dark" key={id}>
                <Card.Img variant="top" src={media_location ? media_location : "https://www.cooperhewitt.org/wp-content/uploads/2018/07/20914_472d45b4ae377c5f_b1.jpg"} /> 
                <Card.Body>
                    <Card.Title>{username}</Card.Title>
                    <Card.Subtitle>{first_name}</Card.Subtitle>
                    <Card.Text>{country}</Card.Text> 
                    <Card.Subtitle>{about}</Card.Subtitle>
                    <Card.Title>Posts</Card.Title>
                    <Card.Text>{userposts.length}</Card.Text>
                    <Card.Title>Shells</Card.Title>
                    {groups?.length > 0 ? groups?.map(({ group_name, media_location_url }) => (
                        <Card className="m-1 bg-dark">
                            <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                                <Col style={{ width: '3rem' }} xs={1} sm={1} md={1} lg={1} xl={1}>
                                    <Card.Img src={media_location_url}/>
                                </Col>
                                <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                                    <Card.Text>{group_name}</Card.Text>
                                </Col>
                            </Row>
                        </Card>
                    )) : (
                        <Card className="bg-dark">
                            <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                                </Col>
                                <Col>
                                    <Card.Text show={show} onHide={handleClose} onClick={handleShow}>No Shells Yet</Card.Text>
                                </Col>
                            </Row>
                        </Card>
                    )}
                    <Card.Title>Friends</Card.Title>
                    {friendships?.length > 0 ? groups?.map(({ group_name, media_location_url }) => (
                        <Card className="m-1 bg-dark">
                            <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                                <Col style={{ width: '3rem' }} xs={1} sm={1} md={1} lg={1} xl={1}>
                                    <Card.Img src={media_location_url}/>
                                </Col>
                                <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                                    <Card.Text>{group_name}</Card.Text>
                                </Col>
                            </Row>
                        </Card>
                    )) : (
                        <Card className="bg-dark">
                            <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                                </Col>
                                <Col>
                                    <Card.Text show={show} onHide={handleClose} onClick={handleShow}>Create a Shell</Card.Text>
                                </Col>
                            </Row>
                        </Card>
                    )}
                </Card.Body>
                <Card.Footer>
                    <Card.Title>Games</Card.Title>
                    {games?.length > 0 ? games?.map(({ id, media_location_url, title}) => (
                        <Card className="m-1 bg-dark" >
                            <Card.Link style={{ textDecoration: 'none' }} href={`/games/${id}`}>
                                <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                                    <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                                        <Card.Img style={{ width: '1rem'}} src={media_location_url} />
                                    </Col>
                                    <Col style={{ position: 'relative' }}>
                                        <Card.Text style={{ position: 'absolute', bottom: '0' }}>{title}</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Link>
                        </Card>
                    )) : (
                        <Card className="bg-dark">
                            <Card.Text>No Games</Card.Text>
                        </Card>
                    )}
                </Card.Footer>
            </Card>
            ))}
            <Modal  show={show} onHide={handleClose}>
                <CreateGroup />
            </Modal>
        </Fragment>
    )
}

export default ProfileCard;