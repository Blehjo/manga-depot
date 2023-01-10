import { Row, Col} from 'react-bootstrap';

import ProfileCard from '../ProfileCard';
import ProfileTabs from '../ProfileTabs';

export default function Profile() {
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