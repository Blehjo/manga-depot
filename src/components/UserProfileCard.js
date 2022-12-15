import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import axios from "axios";

const UserProfileCard = () => {
    const [profile, setProfile] = useState([]);
    const { id } = useParams();

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
                    <Card.Title>Groups</Card.Title>
                    {groups?.length > 0 ? groups?.map(({ group_name, media_location_url }) => (
                        <Card key='top' className="bg-dark">
                            <Card.Img src={media_location_url}/>
                            <Card.Title>{group_name}</Card.Title>
                        </Card>
                    )) : (
                        <Card key='bottom' className="bg-dark">
                            <Card.Text>Join a Group</Card.Text>
                        </Card>
                    )}
                </Card.Body>
                <Card.Footer>
                    <Card.Title>Games</Card.Title>
                    {games?.length > 0 ? games?.map((game) => (
                        <Card key={game} className="bg-dark" >
                            <Card.Text>{game.title}</Card.Text>
                        </Card>
                    )) : (
                        <Card key='bottom' className="bg-dark">
                            <Card.Text>No Games</Card.Text>
                        </Card>
                    )}
                </Card.Footer>
            </Card>
            ))}
        </Fragment>
    );
}

export default UserProfileCard;