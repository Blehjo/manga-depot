import { useContext } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

import { UserProfilesContext } from '../../contexts/userprofiles.context';

export default function Profiles() {
  const { userProfiles } = useContext(UserProfilesContext);

  return (
    <Row xs={1} sm={1} md={2} lg={3} className="justify-content-center">
        {userProfiles?.map(({ id, about, first_name, country, friendships, games, media_location, username, userposts, groups }) => (
        <Col key={id} className='mb-5'>
            <Card style={{ color: 'white' }} className="bg-dark" key={id}>
                <Card.Img variant="top" src={media_location ? media_location : "https://www.cooperhewitt.org/wp-content/uploads/2018/07/20914_472d45b4ae377c5f_b1.jpg"} /> 
                <Card.Body>
                <Card.Link style={{ textDecoration: 'none', color: 'white' }} href={`profile/${id}`}>
                    <Card.Title>{username}</Card.Title>
                </Card.Link>
                    <Card.Subtitle>{first_name}</Card.Subtitle>
                    <Card.Text>{country}</Card.Text> 
                    <Card.Subtitle>{about}</Card.Subtitle>
                    {userposts.length > 0 && <><Card.Link style={{ textDecoration: 'none', color: 'white' }} href={`/posts/${id}`}><Card.Title style={{ marginTop: '1rem' }}  >Posts</Card.Title></Card.Link>
                    <Card.Text>{userposts.length}</Card.Text></>}
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
                </Card.Footer>
            </Card>
        </Col>
        ))}
    </Row>
  );
}