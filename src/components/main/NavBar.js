import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { List, PersonCircle, Inbox } from 'react-bootstrap-icons';

function NavBar(props) {
  return (
    <>
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
                        onChange={props.onSearchChange}
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
                      <Nav.Link key='profile' href="#profile"><PersonCircle size={25}/></Nav.Link>
                    </Nav>
                </Col>
              </Navbar.Collapse>
            </Navbar>
          </Row>
        </Container>
      ))}
    </>
  );
}

export default NavBar;