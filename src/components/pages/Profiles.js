import { useContext } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

import { UserProfilesContext } from '../../contexts/userprofiles.context';

export default function Profiles() {
  const { userProfiles } = useContext(UserProfilesContext);

  console.log(userProfiles)

  return (
    <Row xs={1} sm={1} md={2} lg={3} xl={4} className="justify-content-center">
        {userProfiles?.map(({ id, about, first_name, country, friendships, games, media_location, username, userposts, groups }) => (
        <Col key={id} className='mb-5'>
            <Card style={{ color: 'white' }} className="bg-dark" key={id}>
                <Card.Img variant="top" src={media_location ? require(media_location) : "https://www.cooperhewitt.org/wp-content/uploads/2018/07/20914_472d45b4ae377c5f_b1.jpg"} /> 
                <Card.Body>
                <Card.Link href={`profile/${id}`}>
                    <Card.Title>{username}</Card.Title>
                </Card.Link>
                    <Card.Subtitle>{first_name}</Card.Subtitle>
                    <Card.Text>{country}</Card.Text> 
                    <Card.Subtitle>{about}</Card.Subtitle>
                    <Card.Title>Groups</Card.Title>
                    {groups?.length > 0 ? groups?.map(({ group_name, media_location_url }) => (
                         <Card className="m-1 bg-dark">
                         <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                             <Col style={{ width: '3rem' }} xs={1} sm={1} md={1} lg={1} xl={1}>
                                 <Card.Img src={media_location_url}/>
                             </Col>
                             <Col style={{ position: 'relative' }} xs={10} sm={10} md={10} lg={10} xl={10}>
                                 <Card.Text style={{ position: 'absolute', bottom: '0' }}>{group_name}</Card.Text>
                             </Col>
                         </Row>
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
                        <Card className="m-1 bg-dark" >
                        <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                <Card.Img style={{ width: '1rem'}}src={game.media_location_url} />
                            </Col>
                            <Col style={{ position: 'relative' }}>
                                <Card.Text style={{ position: 'absolute', bottom: '0' }}>{game.title}</Card.Text>
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
        </Col>
        ))}
    </Row>
  );
}