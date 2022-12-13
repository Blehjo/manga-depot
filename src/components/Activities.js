import { Fragment } from "react"
import { Row, Col, Card } from "react-bootstrap";

const Activities = () => {
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

    return (
        <Fragment>
            <Row className="" style={{ display: 'flex', justifyContent: 'space-between' }} xs={1} sm={3} md={3} lg={3} xl={3}>
                {activities.map(({ title, imageSource, link, id }) => (
                    <Col key={id} className="text-white pb-5">
                        <Card className="bg-dark" key={id}>
                            <Card.Img height='155' style={{ objectFit:'cover'}} variant="top" src={require(`../assets/${imageSource}`)} alt={title}/>
                            <Card.Body className="bg-dark activities">
                                <Card.Title>
                                    <a href={link}><span>{title}</span></a>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Fragment>
    );
}

export default Activities;