import { Fragment, useContext } from "react";
import { Card } from "react-bootstrap";
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
                            <Card.Img src={media_location_url}/>
                            <Card.Title>{group_name}</Card.Title>
                        </Card>
                    )) : (
                        <Card className="bg-dark">
                            <Card.Text>Join a Group</Card.Text>
                        </Card>
                    )}
                </Card.Body>
                <Card.Footer>
                    <Card.Title>Games</Card.Title>
                    {games?.length > 0 ? games?.map((game) => (
                        <Card className="bg-dark" >
                            <Card.Text>{game.title}</Card.Text>
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