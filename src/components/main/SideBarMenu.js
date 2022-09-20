import { Nav } from 'react-bootstrap';
import Saved from '../Pieces/Saved'

const SideBarMenu = () => {
    return (
        <div id="newSidebar" className='sticky-top bg-dark mh-100' style={{width: 100}}>
            <Nav 
                navbarScroll 
                className='justify-content-center'
                >
                    <Saved/>
            </Nav>
        </div>
    )
}

export default SideBarMenu;