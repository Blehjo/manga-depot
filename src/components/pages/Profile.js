import { Row, Col} from 'react-bootstrap';
import { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProfileCard from '../ProfileCard';
import ProfileTabs from '../ProfileTabs';

export default function Profile() {
  const [errorMessage, setErrorMessage] = useState('');
  const [profile, setProfile] = useState({});
  const { id } = useParams();

  return (
    <Fragment className="py-5 h-100">
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