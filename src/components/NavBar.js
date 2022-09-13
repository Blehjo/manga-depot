import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Offcanvas } from 'react-bootstrap';
import { List } from 'react-bootstrap-icons';

function OffcanvasExample() {
  return (
    <>
      {['sm'].map((expand) => (
        <Container className='' fluid>
          <Row>
            <Navbar className='fixed-top' key={expand}  bg='dark' variant='dark' expand={expand}>
                  <Col className=''>
                    <Nav>
                    <List className='m-2' size={25} color="white" />
                    <Navbar.Brand href="#home" className='text-white'>Manga Depot</Navbar.Brand>
                    </Nav>
                  </Col>
                  <Col>
                    <Nav className='justify-content-center'>
                      <Form className="d-flex">
                          <Form.Control
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
                    <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-${expand}`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                      placement="end"
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                          Offcanvas
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <Nav variant='dark'className="justify-content-end flex-grow-1 pe-3">
                          <Nav.Link href="#collection">Collection</Nav.Link>
                          <Nav.Link href="#notifications">Notifications</Nav.Link>   
                          <Nav.Link href="#profile">Profile</Nav.Link>
                        </Nav>
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                  </Col>
            </Navbar>
          </Row>
        </Container>
      ))}
    </>
  );
}

export default OffcanvasExample;