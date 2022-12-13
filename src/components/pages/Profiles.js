import React, { useState, useEffect, Fragment } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

import axios from 'axios';

export default function Profiles() {
    const [profiles, setProfiles] = useState([]);

    function getProfiles() {
        axios.get("/api/users",
        {
            mode: 'no-cors',
        })
        .then((response) => setProfiles(response.data));
    }

    useEffect(() => {
        getProfiles();
    }, []);

  return (
      <Fragment>
        <Row className="justify-content-center">
        {Array.from(profiles)?.map(({ id, username, first_name, userposts, games, friendships }) => (
          <Col key={id} md="9" lg="7" xl="5" className="mt-5">
            <Card style={{ borderRadius: '15px' }}>
              <Card.Body className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <Card.Img
                      style={{ width: '180px', borderRadius: '10px' }}
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                      alt='Generic placeholder image'
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <Card.Title>{username}</Card.Title>
                    <Card.Text>{first_name}</Card.Text>
                    <Card.Text>Bio</Card.Text>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">Games</p>
                        <p className="mb-0">{games.length}</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Posts</p>
                        <p className="mb-0">{userposts.length}</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Mates</p>
                        <p className="mb-0">{friendships.length}</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <Button outline className="me-1 flex-grow-1">Chat</Button>
                      <Button className="flex-grow-1">Follow</Button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          ))}
        </Row>
      </Fragment>
  );
}