import { useContext } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { utcConverter } from "../../utils/date/Date";

import { UserProfilesContext } from '../../contexts/userprofiles.context';

const ProfileCarousel = () => {
    const { userProfiles } = useContext(UserProfilesContext);
    
    return (
        <Row xs={1} sm={1} md={1} lg={1} xl={1} className="g-4 pt-3" key="genres">
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
                            items: 4,
                            partialVisibilityGutter: 0,
                            slidesToSlide: 4
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
                        <Card style={{ color: 'white' }} className="mx-2 bg-dark text-white h-100" key={id}>
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
                                                <Card.Text>No Shells Yet</Card.Text>
                                            </Col>
                                        </Row>
                                    </Card>
                                )}
                            </Card.Body>
                            <Card.Footer>
                                <Card.Title>Games</Card.Title>
                                {games?.length > 0 ? games?.map((game) => (
                                    <Card className="m-1 bg-dark" >
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
                </Carousel>
            </Col>
        </Row>
    )
}

export default ProfileCarousel;