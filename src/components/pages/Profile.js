import { Fragment, useState, useEffect } from 'react';
import { Row, Col} from 'react-bootstrap';
import axios from 'axios';

import ProfileCard from '../ProfileCard';
import ProfileTabs from '../ProfileTabs';

export default function Profile() {
  const [profile, setProfile] = useState();

  useEffect( () => {
    const getProfile = async () => {
        await axios({
          url: 'https://shellgeist.herokuapp.com/api/users/',
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then(function (response) {
          console.log(response);
        });
    }
    getProfile();
  }, [])

  return (
    <Fragment>
      <Row lg={2}>
        <Col lg={4} style={{ marginBottom: '2rem' }}>
          <ProfileCard />
        </Col>
        <Col lg={8} >
          <ProfileTabs />
        </Col>
      </Row> 
    </Fragment>
  );
}