import { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col} from 'react-bootstrap';

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
    <Row lg={2}>
      <Col lg={4} style={{ marginBottom: '2rem' }}>
        <ProfileCard />
      </Col>
      <Col lg={8} >
        <ProfileTabs />
      </Col>
    </Row> 
  );
}