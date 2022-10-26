import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap';

import NavBar from "./NavBar";
import SidebarIndex from "./SidebarIndex";
import RoutesIndex from "../routes/RoutesIndex";

const Container = (props) => {
    const [show, setShow] = useState(false);

    function handleClickEvent(evt) {
        evt.preventDefault();
        setShow(!show);
    };

    return (
        <>
            <div style={{zIndex:2}}className="fixed-top">
                <NavBar 
                key={'navbar'}
                onClickEvent={handleClickEvent}
                />
            </div>
            <div style={{zIndex:1}}className="fixed-top">
                <SidebarIndex show={show}/>
            </div>
            <div className="container-margin">
                <Row className="" key="site-body">
                    <Col className="" key="routes-index">
                        <RoutesIndex />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Container;