import { Fragment, useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import {Button, Container, Form, Col, Row, Nav, Navbar } from 'react-bootstrap';

import { List, Inbox } from 'react-bootstrap-icons';

import ProfileIcon from '../profile-icon/profile-icon';
import ProfileDropdown from '../profile-dropdown/profile-dropdown';

import { UserContext } from '../../contexts/user.context';
import { ResultContext } from '../../contexts/result.context';

// import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ProfileContext } from '../../contexts/profile.context';
import { SearchContext } from '../../contexts/search.context';

import gameData from '../../utils/IGDB';
import moment from 'moment';
import axios from 'axios';

function NavBar(props) {
  const { currentUser } = useContext(UserContext);
  const { isProfileOpen } = useContext(ProfileContext);
  const { searchField, setSearchField } = useContext(SearchContext);
  const { results, setResults } = useContext(ResultContext);

  // const handleInputChange = (evt) => {
  //   evt.preventDefault();
  //   setSearchField(evt.target.value);
  // };

  const handleInputChange = async (evt) => {
    evt.preventDefault();
    setSearchField(evt.target.value);
    console.log(searchField)
    // setIsLoading(true);
    // setHasError(false);
    try {
      await gameData(searchField)
      .then(response => {
          setResults(response.data);
          console.log(response.data)
    })} catch (error) {
      // setHasError(true);
      // setErrorMessage(error);
      console.error(error);
    }
    // setIsLoading(false);
  };

  return (
    <Fragment>
      {['sm'].map((expand) => (
        <Container key="navbarContainer" className='' fluid>
          <Row key="rowOne">
            <Navbar fixed=''  key={expand}  bg='dark' variant='dark' expand={expand}>
              <List style={{cursor: "pointer"}} onClick={props.onClickEvent} className='ms-3 m-2' size={25} color="white" />
              <Col key="listColumn" className=''>
                <Nav key="listColumn" className=''>
                  <Navbar.Brand href="/" className='text-white'>Shell Geist</Navbar.Brand>
                </Nav>
              </Col>
              <Navbar.Toggle className=""key="navbarToggle" aria-controls={`navBarItems}`} />
              <Navbar.Collapse className="" key="navbarCollapse" id="navBarItems">
                <Col key="searchColumn" className=''>
                  <Nav key="navForm" className='m-auto'>
                    <Form onSubmit={props.onSearchClick} className="d-flex">
                      <Form.Control
                        onChange={handleInputChange}
                        // onClick={props.onSearchClick}
                        type="search"
                        placeholder="Search"
                        className="me-2 "
                        aria-label="Search"
                        />
                      <Button type="submit" variant="info">Search</Button>
                    </Form>
                  </Nav>
                </Col>
                <Col key="navigationIcons">
                    <Nav key="navIcons" variant='dark'className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link key='notifications' href="#notifications"><Inbox size={25}/></Nav.Link>
                      {
                        currentUser ? (
                            // <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                            <Nav.Link key='profile' href="#profile" ><ProfileIcon/></Nav.Link>
                        ) : (
                            <Nav.Link className='nav-link' href='/authentication'>
                                SIGN IN
                            </Nav.Link>
                        )
                      }
                      {isProfileOpen && <ProfileDropdown />}
                    </Nav>
                </Col>
              </Navbar.Collapse>
            </Navbar>
          </Row>
        </Container>
      ))}
      <Outlet/>
    </Fragment>
  );
}

export default NavBar;