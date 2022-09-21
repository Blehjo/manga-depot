import React from "react";
import { Row, Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Collection, Bookmark, Globe, Heart, Search, Star, House } from 'react-bootstrap-icons';

const SidebarOverlay = () => {

    return (
        <div id="extendedSidebar"className='sticky-top bg-dark' style={{width: 200}}>
            <Row 
            className="mw-100 justify-content-center" style={{color: "white"}} 
            xs={1} 
            >
                <Col >
                <div>
                    <h1>
                        <House/>
                        {''}Home
                    </h1>
                </div>
                </Col>
                <Col>
                    <div>
                        <h1>
                            <Search size={30}/>
                            Explore
                        </h1>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h1>
                            <Collection/>
                            Dash
                        </h1>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h1>
                            <Bookmark/>
                            Saved
                        </h1>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h1>
                            <Globe/>
                            World
                        </h1>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h1>
                            <Heart/>
                            Likes
                        </h1>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h1>
                            <Star/>
                            Favorites
                        </h1>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h1>
                            <House/>
                            History
                        </h1>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h1>
                            <House/>
                            Connections
                        </h1>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default SidebarOverlay;