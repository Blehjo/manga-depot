import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import axios from "axios";

const ProfileCarousel = () => {

    const [userProfiles, setUserProfiles] = useState([]);


    useEffect(() => {
        const information = async () => {
            await axios.get('https://shellgeistapi.herokuapp.com/users', {
                mode: 'no-cors'
            })
            .then((response) => setUserProfiles(response.data));
        };

        return information;
    }, []);

    const followMate = async (event) => {
        event.preventDefault();
        await axios.post(`https://shellgeistapi.herokuapp.com/api/friendships/${event.target.id}`)
        .then((response) => console.log(response));
    }

    const unfollowMate = async (event) => {
        event.preventDefault();
        await axios.delete(`https://shellgeistapi.herokuapp.com/api/friendships/${event.target.id}`)
        .then((response) => console.log(response));
    }

    useEffect(() => {
        const information = async () => {
            await axios.get('https://shellgeistapi.herokuapp.com/api/users/', {
                mode: 'no-cors'
            })

        };

        return information;
    }, [userProfiles]);
    
    return (
        <Row xs={1} className="my-5" key="genres">
            <h1 style={{ color: 'white' }}>Users</h1>
            <Col >
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3,
                            partialVisibilityGutter: 0,
                            slidesToSlide: 3
                        },
                        mobile: {
                            breakpoint: {
                                max: 764,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30,
                            slidesToSlide: 1
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 764
                            },
                            items: 2,
                            partialVisibilityGutter: 30,
                            slidesToSlide: 2
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    swipeable
                >
                    {userProfiles?.map(({ id, about, first_name, country, friendships, games, media_location, username, userposts, groups }) => (
                        <Card style={{ color: 'white', margin: '.5rem' }} className="bg-dark" key={id}>
                        <Card.Img variant="top" src={media_location ? require(media_location) : "https://www.cooperhewitt.org/wp-content/uploads/2018/07/20914_472d45b4ae377c5f_b1.jpg"} /> 
                        <Card.Body>
                            <Row>
                                <Col>
                                <Card.Link style={{ textDecoration: 'none', color: 'white' }} href={`profile/${id}`}>
                                    <Card.Title>{username}</Card.Title>
                                </Card.Link>
                                </Col>
                                <Col>
                                {(friendships.some(({ profile_request }) => profile_request === 'auth.id')) ? <Card.Text id={id} onClick={unfollowMate} >Unfollow</Card.Text> : <Card.Text id={id} onClick={followMate}>Follow Mate</Card.Text> }
                                </Col>
                            </Row>
                            <Card.Subtitle>{first_name}</Card.Subtitle>
                            <Card.Text>{country}</Card.Text> 
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
                    ))} 
                </Carousel>
            </Col>
        </Row>
    )
}

export default ProfileCarousel;