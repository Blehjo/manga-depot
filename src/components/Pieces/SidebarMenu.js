import { Nav } from 'react-bootstrap';
import Saved from './Saved'

const SidebarMenu = () => {
    return (
        <div id="newSidebar" className='sticky-top bg-dark hidden' style={{width: 100}}>
            <Nav 
                className='justify-content-center'
                >
                    <Saved/>
            </Nav>
        </div>
    )
}

export default SidebarMenu;