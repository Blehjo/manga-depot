import React from "react";
import Row from "react-bootstrap/Row";
import { Nav } from "react-bootstrap";
import { Collection, Bookmark, Globe, Heart, Search, Star, House, Recycle, Usb } from 'react-bootstrap-icons';

const SidebarOverlay = () => {

    return (
        <div id="extendedSidebar"className='sticky-top pt-5 bg-dark' style={{width: 200}}>
            <Row 
            className="mw-100 pt-3" style={{color: "white"}} 
            xs={1} 
            >
                    <Nav.Item className="mb-3 ms-3 d-flex inline-block ">
                        <House className='' color="white" size={20}/>
                        <Nav.Link href="/" className="ms-4">
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex inline-block ">
                        <Search className='' color="white" size={20}/>
                        <Nav.Link href="/explore" className="ms-4">
                            Explore
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex inline-block ">
                        <Collection className='' color="white" size={20}/>
                        <Nav.Link href="/dashboard" className="ms-4">
                            Dashboard
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex inline-block ">
                        <Bookmark className='' color="white" size={20}/>
                        <Nav.Link href="/savedgames" className="ms-4">
                            Saved
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex inline-block ">
                        <Globe className='' color="white" size={20}/>
                        <Nav.Link href="/" className="ms-4">
                            World
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex inline-block ">
                        <Heart className='' color="white" size={20}/>
                        <Nav.Link href="/likedposts" className="ms-4">
                            Likes
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex inline-block ">
                        <Star className='' color="white" size={20}/>
                        <Nav.Link href="/" className="ms-4">
                            Favorites
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex inline-block ">
                        <Recycle className='' color="white" size={20}/>
                        <Nav.Link href="/history" className="ms-4">
                            History
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex inline-block ">
                        <Usb className='' color="white" size={20}/>
                        <Nav.Link href="/connections" className="ms-4">
                            Connections
                        </Nav.Link>
                    </Nav.Item>
            </Row>
        </div>
    )
}

export default SidebarOverlay;