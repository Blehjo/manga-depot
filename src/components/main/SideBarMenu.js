import { Nav } from 'react-bootstrap';
import Saved from '../Pieces/Saved'

const SideBarMenu = () => {
    const sideBarTabs = [
        {
            title: "Home",
            route: "/",
            key: 1
        },
        {
            title: "Explore",
            route: "/",
            key: 2
        },
        {
            title: "Popular",
            route: "/",
            key: 3
        },
        // {
        //     title: "Collection",
        //     route: "/",
        //     key: 4
        // }
    ];

    const listItems = sideBarTabs.map((item) => 
            <Nav.Link
                className='bg-dark text-white' 
                action='true'
                key={item.key}  
                href={item.route}
            >
                {item.title}
            </Nav.Link>
    ) 

    return (
        <div className='sticky-top bg-dark h-100'>
            <Nav 
                navbarScroll 
                className='justify-content-center'
            >
                {listItems}
                <Saved/>
            </Nav>
        </div>
    )
}

export default SideBarMenu;