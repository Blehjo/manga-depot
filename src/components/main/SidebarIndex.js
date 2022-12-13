import React, { Fragment, useContext } from 'react';
import { Outlet } from 'react-router';
import { Row, Col } from 'react-bootstrap';

import { ListContext } from '../../contexts/list.context';

import SidebarOverlay from './SidebarOverlay';
import SidebarMenu from './SidebarMenu';

function SidebarIndex() {
  const { isNavOpen } = useContext(ListContext);

  return (
    <Row>
      <Col xs={1} sm={1} md={1} lg={1} xl={1}>
        <div style={{ zIndex:200 }} className="fixed-top">
          <SidebarMenu/>
          {isNavOpen && <SidebarOverlay/>}
        </div>
      </Col>
      <Col xs={10} sm={10} md={10} lg={10} xl={10}>
        <Outlet/>
      </Col>
    </Row>
  );
}

export default SidebarIndex;