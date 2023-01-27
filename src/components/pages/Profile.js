import { Row, Col} from 'react-bootstrap';

import ProfileCard from '../ProfileCard';
import ProfileTabs from '../ProfileTabs';

export default function Profile() {
  return (
    <Row sm={2}>
      <Col sm={4} style={{ marginBottom: '2rem' }}>
        <ProfileCard />
      </Col>
      <Col sm={8} >
        <ProfileTabs />
      </Col>
    </Row> 
  );
}