import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { List } from 'react-bootstrap-icons';

function NavBar(props) {
  return (
    <>
      {['sm'].map((expand) => (
        <Container className='' fluid>
          <Row>
            <Navbar fixed='' className='' key={expand}  bg='dark' variant='dark' expand={expand}>
              <Col className=''>
                <Nav>
                  <List style={{cursor: "pointer"}} ref={props.target} onClick={props.onClickEvent} className='ms-3 m-2' size={25} color="white" />
                  <Navbar.Brand href="#home" className='text-white'>Manga Depot</Navbar.Brand>
                </Nav>
              </Col>
              <Col>
                <Nav className='justify-content-center'>
                  <Form className="d-flex">
                    <Form.Control
                      onChange={props.onSearchChange}
                      value={props.value}
                      type="search"
                      placeholder="Search"
                      className="me-2 "
                      aria-label="Search"
                    />
                    <Button variant="info">Search</Button>
                  </Form>
                </Nav>
              </Col>
              <Col>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                  <Nav variant='dark'className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link key='collection' href="#collection">Collection</Nav.Link>
                    <Nav.Link key='notifications' href="#notifications">Notifications</Nav.Link>   
                    <Nav.Link key='profile' href="#profile">Profile</Nav.Link>
                  </Nav>
              </Col>
            </Navbar>
          </Row>
        </Container>
      ))}
    </>
  );
}

export default NavBar;