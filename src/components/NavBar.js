import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, Form, Col, Row, Nav, Navbar } from 'react-bootstrap';
import ProfileIcon from './profile-icon/profile-icon';
import ProfileDropdown from './profile-dropdown/profile-dropdown';
import ListIcon from './list-icon/list-icon';

import { selectIsProfileOpen } from '../store/profile/profile.selector';
import { selectCurrentUser } from '../store/user/user.selector';
import { signOutStart } from '../store/user/user.action';

import { useSelector, useDispatch } from 'react-redux';
import { ResultItems, searchGame } from '../utils/igdb/IGDB';

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchField, setSearchField] = useState('');
  const currentUser = useSelector(selectCurrentUser);
  const isProfileOpen  = useSelector(selectIsProfileOpen);

  const signOutUser = () => dispatch(signOutStart());

  const handleInputChange = (evt) => {
    evt.preventDefault();
    navigate('/search');
    setSearchField(evt.target.value);
  };

  const handleClickEvent = () => {
  }
  
  return (
    <Fragment>
      {['sm'].map((expand) => (
          <Row key="sm"style={{ margin: '2rem' }} >
            <Navbar fixed='top' style={{ zIndex: 1000 }}  key={expand}  bg='dark' variant='dark' expand={expand}>
              <ListIcon key='listicon'/>
              <Col key="listColumn">
                <Nav >
                  <Navbar.Brand href="/" className='text-white'>Shell Geist</Navbar.Brand>
                </Nav>
              </Col>
              <Navbar.Toggle key="navbarToggle" aria-controls={`navBarItems}`} />
              <Navbar.Collapse key="navbarCollapse" id="navBarItems">
                <Col key="searchColumn" className=''>
                  <Nav key="navForm">
                    <Form onSubmit={handleClickEvent} className="d-flex">
                      <ResultItems searchField={searchField}/>
                      <Form.Control
                        onChange={handleInputChange}
                        type="search"
                        placeholder="Search"
                        className="me-2 "
                        aria-label="Search"
                        key="form-controller"
                        />
                      <Button key="button-search" type="submit" variant="light">Search</Button>
                    </Form>
                  </Nav>
                </Col>
                <Col key="navigationIcons">
                    <Nav key="navIcons" variant='dark'className="justify-content-end pe-3">
                      {
                        currentUser ? (
                            <Nav.Link key='profile' href="#profile" ><ProfileIcon /></Nav.Link>
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
      ))}
    </Fragment>
  );
}

export default NavBar;