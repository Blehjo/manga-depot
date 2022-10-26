import { Button } from "react-bootstrap";

import './profile-dropdown.styles.scss';

import Row from "react-bootstrap/Row";
import { Nav } from "react-bootstrap";
import { Collection, Bookmark, Globe, Heart, Search, Star, House, Recycle, Usb } from 'react-bootstrap-icons';

const ProfileDropdown = () => {
    return (
        <div className='profile-dropdown-container'>
            <div className='profile-options' />
            <div className='' >
                <Row 
                className="" style={{color: "white"}} 
                xs={1} 
                >
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                        <House className='' color="white" size={20}/>
                        <Nav.Link href="/" className="ms-4">
                        Notifications
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center ">
                        <Search className='' color="white" size={20}/>
                        <Nav.Link href="/explore" className="ms-4">
                        Dashboard
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center ">
                        <Collection className='' color="white" size={20}/>
                        <Nav.Link href="/dashboard" className="ms-4">
                        Sign out
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center ">
                        <Bookmark className='' color="white" size={20}/>
                        <Nav.Link href="/savedgames" className="ms-4">
                        Appearance: Device theme
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                        <Globe className='' color="white" size={20}/>
                        <Nav.Link href="/" className="ms-4">
                        Settings
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                        <Heart className='' color="white" size={20}/>
                        <Nav.Link href="/likedposts" className="ms-4">
                        Help
                        </Nav.Link>
                    </Nav.Item>
                </Row>
            </div>
        </div>
    )
}

export default ProfileDropdown;