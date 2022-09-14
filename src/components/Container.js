import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Body from "./Body";
import { Row, Col} from 'react-bootstrap';
import SideBarMenu from "./SideBarMenu";
import search from '../utils//API';

const Container = (props) => {
    const [value, setValue] = useState(props.value);
    const [results, setResults] = useState([]);
    function handleInputChange(evt) {
        setValue(evt.target.value)
    };
    // const [errorMessage, setErrorMessage] = useState('');

    const searchGiphy = async (query) => {
        const response = await search(query);
        setResults(response.data.data);
    };

    useEffect(() => {
        searchGiphy(value);
    });

    return (
        <>
            <NavBar 
                onSearchChange={handleInputChange}
                value={value}
            />
            <Row key={1}>
                <Col xs="1" lg="1" key={1}><SideBarMenu/></Col>
                <Col key={2}><Body results={results}/></Col>
            </Row>
            {/* <Cards/> */}
            <Footer/>
        </>
    )
}

export default Container;