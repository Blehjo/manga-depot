import React from "react";
import Games from "../components/main/Games";
import EventCarousel from "../components/carousels/EventCarousel";
import { Row, Col, Card } from "react-bootstrap";
import GameCarousel from "../components/carousels/GameCarousel";



const Home = (props) => {
    const { results } = props;
    const activities = [
        {
            id: 0,
            title: "Discuss a game",
            imageSource: "bladerunner-banner-tvs.jpeg",
            link: "/games",
        },
        {
            id: 1,
            title: "Join a community",
            imageSource: "bladerunner-baner.png",
            link: "/groups",
        },
        {
            id: 2,
            title: "Participate in an Event",
            imageSource: "esports.jpeg",
            link: "/events",
        },
    ]

    const items = [
        {
            image: "",
            title: "Start a group",
            description: "You don’t have to be an expert to gather people together and explore shared interests.",
            link: "",
        },
        {
            image: "",
            title: "Find an event",
            description: "Events are happening on just about any topic you can think of, from online gaming and photography to yoga and hiking.",
            link: "",
        },
        {
            image: "",
            title: "Find a game",
            description: "Do what you love, meet others who love it, find your community. The rest is history!",
            link: "/explore",
        },
    ]

    const stories = [
        {
            title: "",
            image: "",
            description: "",
        },
        {
            title: "",
            image: "",
            description: "",
        },
        {
            title: "",
            image: "",
            description: "",
        },
    ]

    return (
        <div className="">
            <Row className='pb-5'>
                <Col xs="7"lg="6">
                        <h1 className="text-white">Welcome to Shell Geist</h1>
                        <p className="text-white">Whatever game you’re interested in getting better at this year, Shell Geist can help. Join the community today and help others by leaving advice or learn from others and ask questions. Think of Shell Geist as a virtual meetup. You can attend events by getting a code and joining video game lobbies, joining live discussions, and leaving your own feed back from first-hand experience. Your fellow mates have turned to Shell Geist to meet people, make friends, find support, grow a business, and explore their interests. Thousands of events are happening every day—join the fun.</p>
                </Col>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'space-between' }} xs={1} sm={3} md={3} lg={3} xl={3}>
                {activities.map(({ title, imageSource, link, id }) => (
                    <Col style={{ width: '25rem' }} className="text-white">
                        <Card className="" key={id}>
                            <Card.Img height='155' style={{ objectFit:'cover'}} variant="top" src={require(`/Users/blehjo/projects/shell-geist/src/assets/${imageSource}`)} alt={title}/>
                            <Card.Body className="bg-dark activities">
                                <Card.Title>
                                    <a href={link}><span>{title}</span></a>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col>
                    <EventCarousel/>
                </Col>
            </Row>
            <Row>
                <Col className="text-white">
                    <h1>How Shell Geist works</h1>
                    <p >Meet new people who share your interests through online and in-game events. It’s free to create an account.</p>
                </Col>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'space-between' }} xs={1} sm={3} md={3} lg={3} xl={3}>
                {items.map(({ title, image, link, description }) => (
                    <Col style={{ width: '25rem' }} className="text-white">
                        <Card key={title}>
                            <Card.Img style={{ objectFit: 'none'}} variant="top" /*{src={require(`/Users/blehjo/projects/shell-geist/src/assets/${image}`)}}*/ alt={title}/>
                            <Card.Body>
                                <Card.Title>
                                    <a href={link}><span>{title}</span></a>
                                </Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col>
                    <GameCarousel/>
                </Col>
            </Row>
            {/* <Games results={results}/> */}
        </div>
    )
}

export default Home;