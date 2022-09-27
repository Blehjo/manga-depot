import React from 'react';
import SidebarOverlay from '../Pieces/SidebarOverlay';
import SidebarMenu from '../Pieces/SidebarMenu';
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