import React from 'react';
import SidebarOverlay from '../pieces/SidebarOverlay';
import SidebarMenu from '../pieces/SidebarMenu';
import Collapse from 'react-bootstrap/Collapse';

function SidebarIndex(props) {
  return (
    <>
      <SidebarMenu/>
      <Collapse in={props.show}>
        <div>
          <SidebarOverlay/>
        </div>
      </Collapse>
    </>
  );
}

export default SidebarIndex;