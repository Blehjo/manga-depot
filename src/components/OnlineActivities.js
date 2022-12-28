import { Fragment } from "react"
import { Card, Col, Row } from "react-bootstrap";

const OnlineActivities = () => {
    const items = [
        {
            image: "develop.png",
            title: "Start a group",
            description: "You don’t have to be an expert to gather people together and explore shared interests.",
            link: "",
        },
        {
            image: "cloudnetwork.png",
            title: "Find an event",
            description: "Events are happening on just about any topic you can think of, from online gaming to photography.",
            link: "",
        },
        {
            image: "cyberspace.png",
            title: "Find a game",
            description: "Do what you love, meet others who love it, find your community. The rest is history!",
            link: "/explore",
        },
    ]

    return (
        <Fragment>
            <Row style={{ display: 'flex', justifyContent: 'space-between' }} xs={1} md={3}>
                {items.map(({ title, image, link, description }) => (
                    <Col key={title} className="text-white pb-5">
                        <Card className="bg-dark" key={title}>
                            <Card.Img height='400' style={{ objectFit: 'cover'}} variant="top" src={require(`../assets/${image}`)} alt={title}/>
                            <Card.Body className="activities">
                                <Card.Title>
                                    <a href={link}><span>{title}</span></a>
                                </Card.Title>
                                <Card.Text className="description">
                                    {description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Fragment>
    );
}

export default OnlineActivities;