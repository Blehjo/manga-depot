import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

const Introduction = () => {
    return (
        <Fragment>
            <Row>
                <Col className="text-white">
                    <h1>How Shell Geist works</h1>
                    <p >Meet new people who share your interests through online and in-game events. It’s free to create an account.</p>
                </Col>
            </Row>
        </Fragment>
    );
}

export default Introduction;