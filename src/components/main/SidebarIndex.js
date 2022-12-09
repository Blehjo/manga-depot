import React, { useContext } from 'react';
import SidebarOverlay from './SidebarOverlay';
import SidebarMenu from './SidebarMenu';
import { ListContext } from '../../contexts/list.context';

function SidebarIndex() {
  const { isNavOpen } = useContext(ListContext);

  return (
    <>
      <SidebarMenu/>
      {isNavOpen && <SidebarOverlay/>}
    </>
  );
}

export default SidebarIndex;