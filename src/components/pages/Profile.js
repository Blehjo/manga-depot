import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Fragment } from 'react';


export default function Profile() {
  return (
      <Fragment className="py-5 h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="9" xl="7">
            <Card>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <Card.Img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  <Button outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                    Edit profile
                  </Button>
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  {/* <MDBTypography tag="h5">Andy Horwitz</MDBTypography> */}
                  <Card.Text>New York</Card.Text>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <Card.Text className="mb-1 h5">253</Card.Text>
                    <Card.Text className="small text-muted mb-0">Photos</Card.Text>
                  </div>
                  <div className="px-3">
                    <Card.Text className="mb-1 h5">1026</Card.Text>
                    <Card.Text className="small text-muted mb-0">Followers</Card.Text>
                  </div>
                  <div>
                    <Card.Text className="mb-1 h5">478</Card.Text>
                    <Card.Text className="small text-muted mb-0">Following</Card.Text>
                  </div>
                </div>
              </div>
              <Card.Body className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <Card.Text className="font-italic mb-1">Web Developer</Card.Text>
                    <Card.Text className="font-italic mb-1">Lives in New York</Card.Text>
                    <Card.Text className="font-italic mb-0">Photographer</Card.Text>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <Card.Text className="lead fw-normal mb-0">Recent photos</Card.Text>
                  <Card.Text className="mb-0"><a href="#!" className="text-muted">Show all</a></Card.Text>
                </div>
                <Row>
                  <Col className="mb-2">
                    <Card.Img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </Col>
                  <Col className="mb-2">
                    <Card.Img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </Col>
                </Row>
                <Row className="g-2">
                  <Col className="mb-2">
                    <Card.Img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </Col>
                  <Col className="mb-2">
                    <Card.Img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Fragment>
  );
}