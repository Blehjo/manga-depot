import { Row, Col} from 'react-bootstrap';
import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import ProfileCard from '../ProfileCard';
import ProfileTabs from '../ProfileTabs';

export default function Profile() {
  const [profile, setProfile] = useState();

  useEffect( () => {

    const getProfile = async () => {
        await axios.get('/api/users/',
       {
           mode: 'no-cors',
       })
       .then((response) => setProfile(response.data));
    }
    getProfile();
  }, [])

  return (
    <Fragment>
      <Row className="m-5" lg={2} xl={2}>
        <Col md={4} lg={4} xl={4}>
          <ProfileCard />
        </Col>
        <Col md={8} lg={8} xl={8}>
          <ProfileTabs />
        </Col>
      </Row>
    </Fragment>
  );
}