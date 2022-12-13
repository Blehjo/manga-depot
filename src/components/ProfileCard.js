import { Fragment } from "react";
import { Card, Col, Row, Nav } from "react-bootstrap";
import { LinkedinFilled, GithubFilled, MailFilled, PaperClipOutlined } from '@ant-design/icons';

const ProfileCard = () => {
    return (
        <Fragment>
            <Card >
                {/* <Card.Img variant="top" src={require("../assets/profilepicture/newprofilepic.jpg")} /> */}
                <Card.Body>
                    <Card.Title>Bleh Seton</Card.Title>
                    <Card.Text>Chicago, Illinois</Card.Text> 
                    <Card.Subtitle>Main Expertise</Card.Subtitle>
                    <Card style={{ margin: '1rem' }}>
                        <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                <Card.Img style={{ width: '1.5rem' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <Card.Title>React</Card.Title> 
                            </Col>
                        </Row>
                    </Card>
                    <Card style={{ margin: '1rem' }}>
                        <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                <Card.Img style={{ width: '1.5rem' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"/>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <Card.Title>C#</Card.Title> 
                            </Col>
                        </Row>
                    </Card>
                    <Card style={{ margin: '1rem' }}>
                        <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                <Card.Img style={{ width: '1.5rem' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <Card.Title>Javascript</Card.Title> 
                            </Col>
                        </Row>
                    </Card>
                    <Card style={{ margin: '1rem' }}>
                        <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                <Card.Img style={{ width: '1.5rem' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"/>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <Card.Title>.NET</Card.Title> 
                            </Col>
                        </Row>
                    </Card>
                    <Card style={{ margin: '1rem' }}>
                        <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                <Card.Img style={{ width: '1.5rem' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"/>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <Card.Title>ASP.NET</Card.Title> 
                            </Col>
                        </Row>
                    </Card>
                </Card.Body>
                <Card.Footer>
                    <Nav style={{ justifyContent: 'space-evenly', fontSize: 35, }} >
                        <Nav.Link target="_blank" rel="noreferrer" href='https://github.com/Blehjo'><GithubFilled /></Nav.Link>
                        <Nav.Link target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/bleh-s/'><LinkedinFilled /></Nav.Link>
                        <Nav.Link href='mailto:blehjooo@gmail.com'><MailFilled /></Nav.Link>
                        <Nav.Link target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1tY07qylX8C-UOeua_pUEYZ_uVw7KKIKO/view?usp=share_link'><PaperClipOutlined /></Nav.Link>
                    </Nav>
                </Card.Footer>
            </Card>
        </Fragment>
    )
}

export default ProfileCard;