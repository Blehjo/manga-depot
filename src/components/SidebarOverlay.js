import React from "react";
import { Nav, Row } from "react-bootstrap";
import { Collection, Globe, House, Eye, Speedometer2, Router, ChatDots } from 'react-bootstrap-icons';

const SidebarOverlay = () => {

    return (
        <div id="extendedSidebar"className='sticky-top pt-5 bg-dark' style={{width: 200}}>
            <Row 
            className="mw-100 pt-3" style={{color: "white"}} 
            xs={1} 
            >
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <House className='' color="white" size={20}/>
                    <Nav.Link href="/" className="ms-4">
                        Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Speedometer2 className='' color="white" size={20}/>
                    <Nav.Link href="/dashboard" className="ms-4">
                        Dashboard
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <ChatDots className='' color="white" size={20}/>
                    <Nav.Link href="/connections" className="ms-4">
                        Connections
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Collection className='' color="white" size={20}/>
                    <Nav.Link href="/discovery" className="ms-4">
                        Groups
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
                    <Globe className='' color="white" size={20}/>
                    <Nav.Link href="/" className="ms-4">
                        Search
                    </Nav.Link>
                </Nav.Item>
            </Row>
        </div>
    )
}

export default SidebarOverlay;