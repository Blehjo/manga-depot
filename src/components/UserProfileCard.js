import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import axios from "axios";

// import { AuthContext } from "../contexts/auth.context";

const UserProfileCard = () => {
    // const { auth } = useContext(AuthContext);
    const [profile, setProfile] = useState([]);
    const [auth, setAuth] = useState();
    const { id } = useParams();

    const followMate = async (event) => {
        event.preventDefault();
        await axios.post(`/api/friendships/${id}`)
        .then((response) => console.log(response));
    }

    const unfollowMate = async (event) => {
        event.preventDefault();
        await axios.delete(`/api/friendships/${id}`)
        .then((response) => console.log(response));
    }

    useEffect(() => {
        const information = async () => {
            await axios.get('/api/users/', {
                mode: 'no-cors'
            })
            .then((response) => setAuth(response.data));
        };

        return information;
    }, []);

    useEffect(() => {
        async function getProfile(id) {
            await axios.get(`/api/users/${id}`, {
                mode: 'no-cors'
            })
            .then((response) => setProfile(response.data))
        } 
        getProfile(id);
    }, [id])

    return (
        <Fragment>
            {profile?.map(({ id, about, first_name, country, friendships, games, media_location, username, userposts, groups }) => (
            <Card style={{ color: 'white' }} className="bg-dark" key={id}>
            <Card.Img variant="top" src={media_location ? require(media_location) : "https://www.cooperhewitt.org/wp-content/uploads/2018/07/20914_472d45b4ae377c5f_b1.jpg"} /> 
            <Card.Body>
                <Card.Title>{username}</Card.Title>
                <Card.Subtitle>{first_name}</Card.Subtitle>
                <Card.Text>{country}</Card.Text> 
                <Card.Subtitle>{about}</Card.Subtitle>
                {userposts.length > 0 && <><Card.Title style={{ marginTop: '1rem' }}>Posts</Card.Title>
                <Card.Text>{userposts.length}</Card.Text></>}
                {groups?.length > 0 && 
                <>
                <Card.Title style={{ marginTop: '1rem' }}>Shells</Card.Title>
                {groups?.map(({ id, group_name, media_location_url }) => (
                    <Row xs={2} >
                        <Card.Link style={{ textDecoration: 'none' }} href={`/groups/${id}`}>
                            <Row xs={2} >
                                <Col xs={2} >
                                    <Card.Img style={{ width: '1.2rem' }} src={media_location_url}/>
                                </Col>
                                <Col style={{ position: 'relative' }} xs={10} >
                                    <Card.Text style={{ position: 'absolute', bottom: '0' }}>{group_name}</Card.Text>
                                </Col>
                            </Row>
                        </Card.Link>
                    </Row>
                ))} 
                </>
                }
                {friendships?.length > 0 && 
                    <>
                     <Card.Title style={{ marginTop: '1rem' }} >Mates</Card.Title>
                        <Row >
                            <Col xs={10}>
                                <Card.Text>{friendships.length}</Card.Text>
                            </Col>
                        </Row>
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
                {(friendships.some(({ profile_request }) => profile_request === auth[0].id)) ? <Card.Text id={id} onClick={unfollowMate} >Unfollow</Card.Text> : <Card.Text id={id} onClick={followMate}>Follow Mate</Card.Text> }
            </Card.Footer>
        </Card>
            ))}
        </Fragment>
    );
}

export default UserProfileCard;