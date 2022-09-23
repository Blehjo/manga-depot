import React, { useState, useRef } from 'react';
import SidebarOverlay from '../Pieces/SidebarOverlay';
import SideBarMenu from './SideBarMenu';
import Collapse from 'react-bootstrap/Collapse';

function SidebarIndex(props) {
  return (
    <>
      <SideBarMenu/>
      <Collapse in={props.show}>
        <div>
          <SidebarOverlay/>
        </div>
      </Collapse>
    </>
  );
}

export default SidebarIndex;