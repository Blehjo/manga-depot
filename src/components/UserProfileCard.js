import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import axios from "axios";

const UserProfileCard = () => {
    const [profile, setProfile] = useState([]);
    const [auth, setAuth] = useState();
    const { id } = useParams();

    const followMate = async (event) => {
        event.preventDefault();
        await axios.post(`https://shellgeistapi.herokuapp.com/api/friendships/${id}`)
    }

    const unfollowMate = async (event) => {
        event.preventDefault();
        await axios.delete(`https://shellgeistapi.herokuapp.com/api/friendships/${id}`)
    }

    useEffect(() => {
        const information = async () => {
            await axios.get('https://shellgeistapi.herokuapp.com/api/users/', {
                mode: 'no-cors'
            })
            .then((response) => setAuth(response.data[0]));
        };

        async function getProfile(id) {
            await axios.get(`https://shellgeistapi.herokuapp.com/api/users/${id}`, {
                mode: 'no-cors'
            })
            .then((response) => setProfile(response.data))
        } 
        information();
        getProfile(id);
    }, [id])

    return (
        <Fragment>
            {profile?.map(({ id, about, first_name, country, friendships, games, media_location, username, userposts, groups }) => (
            <Card style={{ color: 'white' }} className="bg-dark" key={id}>
                <Card.Img variant="top" src={media_location ? media_location : "https://www.cooperhewitt.org/wp-content/uploads/2018/07/20914_472d45b4ae377c5f_b1.jpg"} /> 
                <Card.Body>
                    <Row xs={2}>
                    <Col xs={9}>
                    <Card.Link style={{ textDecoration: 'none', color: 'white' }} href={`profile/${id}`}>
                    <Card.Title>{username}</Card.Title>
                    </Card.Link>
                    </Col>
                    <Col xs={3}>{(friendships.some(({ profile_request }) => profile_request === auth?.id)) ? <Card.Text id={id} onClick={unfollowMate} >Unfollow</Card.Text> : <Card.Text id={id} onClick={followMate}>Follow</Card.Text> }</Col>
                    </Row>
                    <Row style={{ marginBottom: '1rem' }} xs={2}>
                        <Col>
                        {friendships?.length > 0 && 
                        <>
                        <Card.Title >Ghosts</Card.Title>
                            <Row >
                                <Col xs={10}>
                                    <Card.Text>{friendships.length}</Card.Text>
                                </Col>
                            </Row>
                        </>
                        }
                        </Col>
                        <Col>
                        {userposts.length > 0 && <><Card.Link style={{ textDecoration: 'none', color: 'white' }} href={`/posts/${id}`}><Card.Title>Posts</Card.Title></Card.Link>
                        <Card.Text>{userposts.length}</Card.Text></>}
                        </Col>
                    </Row>
                    <Card.Text>{first_name}</Card.Text>
                    {/* <Card.Text>{country}</Card.Text>  */}
                    <Card.Subtitle>{about}</Card.Subtitle>
                    {groups?.length > 0 && 
                    <>
                    <Card.Title style={{ marginTop: '1rem' }}>Shells</Card.Title>
                    {groups?.map(({ id, group_name, media_location_url }) => (
                        <Row xs={2} >
                            <Card.Link style={{ textDecoration: 'none' }} href={`/groups/${id}`}>
                                <Row xs={2} >
                                    <Col xs={1} >
                                        <Card.Img style={{ width: '1.2rem' }} src={media_location_url}/>
                                    </Col>
                                    <Col style={{ marginLeft: '2rem', position: 'relative' }} xs={11} >
                                        <Card.Text style={{ position: 'absolute', bottom: '0' }}>{group_name}</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Link>
                        </Row>
                    ))} 
                    </>
                    }
                </Card.Body>
                <Card.Footer>
                    {games?.length > 0 && 
                    <>
                    <Card.Title>Games</Card.Title>
                    {games?.map(({ id, media_location_url, title}) => (
                        <Row xs={2} >
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
                        </Row>
                    ))} 
                    </>
                    }
                </Card.Footer>
            </Card>
            ))}
        </Fragment>
    );
}

export default UserProfileCard;