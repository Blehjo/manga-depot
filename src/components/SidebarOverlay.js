import { useState, useEffect } from "react";
import { Card, Nav, Row, Col } from "react-bootstrap";
import { Collection, Globe, House, Eye, Speedometer2, Router, ChatDots } from 'react-bootstrap-icons';

import axios from 'axios';

import { utcConverter } from '../utils/date/Date';

const SidebarOverlay = () => {
    const [groups, setGroups] = useState();
    
    useEffect(() => {
        const getGroups = async () => {
            await axios.get(`/api/groups/`, {
                mode: 'no cors'
            })
            .then((resp) => setGroups(resp.data)); 
        }
        getGroups();
    }, [])

    return (
        <div id="extendedSidebar"className='sticky-top pt-5 bg-dark' style={{width: 200}}>
            <Row 
            className="mw-100 pt-3" style={{color: "white"}} 
            xs={1} 
            >
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <House className='' color="white" size={20}/>
                    <Nav.Link href="/profile" className="ms-4">
                        Profile
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Speedometer2 className='' color="white" size={20}/>
                    <Nav.Link href="/dashboard" className="ms-4">
                        Dashboard
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Speedometer2 className='' color="white" size={20}/>
                    <Nav.Link href="/messages" className="ms-4">
                        Messages
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Collection className='' color="white" size={20}/>
                    <Nav.Link href="/discovery" className="ms-4">
                        Discover
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Eye className='' color="white" size={20}/>
                    <Nav.Link href="/explore" className="ms-4">
                        Explore
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Router className='' color="white" size={20}/>
                    <Nav.Link href="/interactions" className="ms-4">
                        Interactions
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <ChatDots className='' color="white" size={20}/>
                    <Nav.Link href="/connections" className="ms-4">
                        Connections
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Globe className='' color="white" size={20}/>
                    <Nav.Link href="/" className="ms-4">
                        Search
                    </Nav.Link>
                </Nav.Item>
                {groups?.length > 0 && <Nav>Groups</Nav>}
                {groups?.length > 0 && Array.from(groups)?.map(({ id, group_name, media_location_url }) => (
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                        <Card className="bg-dark">
                            <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                                    <Card.Img style={{ width: '1rem'}} src={media_location_url} />
                                </Col>
                                <Col>
                                    <Card.Text>{group_name}</Card.Text>
                                </Col>
                            </Row>
                        </Card>
                    </Nav.Item>
                ))}
            </Row>
        </div>
    )
}

export default SidebarOverlay;