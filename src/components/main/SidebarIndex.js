import React, { useContext } from 'react';
// import SidebarOverlay from '../pieces/SidebarOverlay';
import SidebarMenu from '../pieces/SidebarMenu';
import { ListContext } from '../../contexts/list.context';

function SidebarIndex() {
  const { isNavOpen } = useContext(ListContext);

  return (
    <>
      <SidebarMenu/>
      {/* {isNavOpen && <SidebarOverlay/>} */}
    </>
  );
}

export default SidebarIndex;