import { Fragment, useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import {Button, Container, Form, Col, Row, Nav, Navbar } from 'react-bootstrap';
import { Inbox } from 'react-bootstrap-icons';

import ListIcon from '../list-icon/list-icon';

import ProfileIcon from '../profile-icon/profile-icon';
import ProfileDropdown from '../profile-dropdown/profile-dropdown';

import { UserContext } from '../../contexts/user.context';
import { ResultContext } from '../../contexts/result.context';
import { ProfileContext } from '../../contexts/profile.context';
import { SearchContext } from '../../contexts/search.context';

import gameData from '../../utils/IGDB';

function NavBar(props) {
  const { currentUser } = useContext(UserContext);
  const { isProfileOpen } = useContext(ProfileContext);
  const { searchField, setSearchField } = useContext(SearchContext);
  const { results, setResults } = useContext(ResultContext);

  const handleInputChange = (evt) => {
    evt.preventDefault();
    setSearchField(evt.target.value);
    console.log(searchField);
  };

  const handleClickEvent = async (evt) => {
    // evt.preventDefault();
    try {
      await gameData(searchField)
      .then(response => {
          setResults(response.data);
          console.log(results)
    })} catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      {['sm'].map((expand) => (
        <Container key="navbarContainer" className='' fluid>
          <Row key="rowOne">
            <Navbar fixed=''  key={expand}  bg='dark' variant='dark' expand={expand}>
              <ListIcon />
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
                        onClick={handleClickEvent}
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
                      {
                        currentUser ? (
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