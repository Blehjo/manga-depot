import { useContext } from "react";
import axios from 'axios';
import { Nav, Row } from "react-bootstrap";
import { Inbox, Gear, Laptop, DoorOpen, QuestionCircle, MenuApp, Person } from 'react-bootstrap-icons';

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { AuthContext } from "../../contexts/auth.context";

import './profile-dropdown.styles.scss';


const ProfileDropdown = () => {
    const { setAuth } = useContext(AuthContext);

    async function handleSignOut() {
        signOutUser();
        await axios.post('api/users/logout', {
            mode: 'no-cors'
        })
        .then((response) => setAuth(response.data));
    }

    return (
        <div className='profile-dropdown-container'>
            <div className='profile-options' />
            <div className='' >
                <Row 
                className="" style={{color: "white"}} 
                xs={1} 
                >
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                        <Person className='' color="white" size={20}/>
                        <Nav.Link href="/profile" className="ms-4">
                        Profile
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                        <Inbox className='' color="white" size={20}/>
                        <Nav.Link href="/" className="ms-4">
                        Notifications
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center ">
                        <Laptop className='' color="white" size={20}/>
                        <Nav.Link href="/explore" className="ms-4">
                        Dashboard
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center ">
                        <MenuApp className='' color="white" size={25}/>
                        <Nav.Link href="/savedgames" className="ms-4">
                        Appearance: Device theme
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                        <Gear className='' color="white" size={20}/>
                        <Nav.Link href="/" className="ms-4">
                        Settings
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center ">
                        <DoorOpen className='' color="white" size={20}/>
                        <Nav.Link href="/authentication" className="ms-3">
                        <span className='nav-link' onClick={handleSignOut}>Sign out</span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                        <QuestionCircle className='' color="white" size={20}/>
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