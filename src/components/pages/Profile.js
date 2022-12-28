import { Fragment, useState, useEffect } from 'react';
import { Row, Col} from 'react-bootstrap';
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
      <Row className="mediatoggle m-5" lg={2}>
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