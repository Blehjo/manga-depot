import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Body from "./Body";
import Row from 'react-bootstrap/Row';
import SideBarMenu from "./SideBarMenu";
import Col from "react-bootstrap/Col";

const Container = () => {
    return (
        <>
            <NavBar/>
            <Row key={1}>
                <Col xs="1" lg="1" key={1}><SideBarMenu/></Col>
                <Col key={2}><Body/></Col>
            </Row>
            {/* <Cards/> */}
            <Footer/>
        </>
    )
}

export default Container;