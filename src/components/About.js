import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

const About = () => {
    return (
        <Fragment>
            <Row >
                <Col xs="12"lg="7">
                    <h1 className="text-white">Welcome to Shell Geist</h1>
                    <p className="text-white">Whatever game you’re interested in getting better at this year, Shell Geist can help. Join the community today and help others by leaving advice or learn from others and ask questions. Think of Shell Geist as a virtual meetup. You can attend events by getting a code and joining video game lobbies, joining live discussions, and leaving your own feed back from first-hand experience. Your fellow mates have turned to Shell Geist to meet people, make friends, find support, grow a business, and explore their interests. Thousands of events are happening every day—join the fun.</p>
                </Col>
            </Row>
        </Fragment>
    )
}

export default About;