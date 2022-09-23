import Nav from 'react-bootstrap/Nav';
import { Collection, Bookmark, Globe, Heart, Search, Star, House, Recycle, Usb } from 'react-bootstrap-icons';


const Saved = () => {
    return (
        <>
            <Nav.Link>
                <House className='mt-4' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link>
                <Search className='mt-4' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link>
                <Collection className='mt-4' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link>
                <Bookmark className='mt-4' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link>
                <Globe className='mt-4' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link>
                <Heart className='mt-4' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link>
                <Star className='mt-4' action='true' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link>
                <Recycle className='mt-4' action='true' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link>
                <Usb className='mt-4' action='true' color="white" size={40}/>
            </Nav.Link>
        </>
    )
}

export default Saved;