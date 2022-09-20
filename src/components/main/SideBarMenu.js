import { Nav } from 'react-bootstrap';
import Saved from '../Pieces/Saved'

const SideBarMenu = () => {
    return (
        <div id="newSidebar" className='sticky-top bg-dark' style={{width: 100}}>
            <Nav 
                className='justify-content-center'
                >
                    <Saved/>
            </Nav>
        </div>
    )
}

export default SideBarMenu;