import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function SideBar({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        <span className='glyphicon glyphicon-menu-hamburger' aria-hidden="true"></span>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          Hello
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li key={1}>Profile</li>
            <li key={2}>Collection</li>
            <li key={3}>Notifications</li>
            <li key={4}>Mangas</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;