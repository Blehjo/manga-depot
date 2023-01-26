import { Outlet } from 'react-router';
import { Row, Col } from 'react-bootstrap';

import SidebarOverlay from './SidebarOverlay';
import SidebarMenu from './SidebarMenu';
import { useSelector } from 'react-redux';
import { selectIsNavOpen } from '../store/nav/nav.selector';

function SidebarIndex() {
  const isNavOpen = useSelector(selectIsNavOpen);

  return (
    <Row >
      <Col xs={1} >
        <div style={{ zIndex:200 }} className="fixed-top">
          <SidebarMenu/>
          {isNavOpen && <SidebarOverlay/>}
        </div>
      </Col>
      <Col style={{ margin: '2rem' }} xs={10} >
        <Outlet/>
      </Col>
    </Row>
  );
}

export default SidebarIndex;