import { Fragment, useContext } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { AuthContext } from "../contexts/auth.context";

const ProfileCard = () => {
    const { auth } = useContext(AuthContext);

    return (
        <Fragment>
            {auth?.map(({ id, about, first_name, country, friendships, games, media_location, username, userposts, groups }) => (
            <Card style={{ color: 'white' }} className="bg-dark" key={id}>
                <Card.Img variant="top" src={media_location ? require(media_location) : "https://www.cooperhewitt.org/wp-content/uploads/2018/07/20914_472d45b4ae377c5f_b1.jpg"} /> 
                <Card.Body>
                    <Card.Title>{username}</Card.Title>
                    <Card.Subtitle>{first_name}</Card.Subtitle>
                    <Card.Text>{country}</Card.Text> 
                    <Card.Subtitle>{about}</Card.Subtitle>
                    <Card.Title>Posts</Card.Title>
                    <Card.Text>{userposts.length}</Card.Text>
                    <Card.Title>Groups</Card.Title>
                    {groups?.length > 0 ? groups?.map(({ group_name, media_location_url }) => (
                        <Card className="bg-dark">
                            <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                                    <Card.Img src={media_location_url}/>
                                </Col>
                                <Col>
                                    <Card.Title>{group_name}</Card.Title>
                                </Col>
                            </Row>
                        </Card>
                    )) : (
                        <Card className="bg-dark">
                            <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                                </Col>
                                <Col>
                                    <Card.Text>Create a Group</Card.Text>
                                </Col>
                            </Row>
                        </Card>
                    )}
                </Card.Body>
                <Card.Footer>
                    <Card.Title>Games</Card.Title>
                    {games?.length > 0 ? games?.map((game) => (
                        <Card className="bg-dark" >
                            <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                                    <Card.Img style={{ width: '1rem'}}src={game.media_location_url} />
                                </Col>
                                <Col>
                                    <Card.Text>{game.title}</Card.Text>
                                </Col>
                            </Row>
                        </Card>
                    )) : (
                        <Card className="bg-dark">
                            <Card.Text>No Games</Card.Text>
                        </Card>
                    )
                }
                </Card.Footer>
            </Card>
            ))}
        </Fragment>
    )
}

export default ProfileCard;