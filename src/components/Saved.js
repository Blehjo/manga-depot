import Nav from 'react-bootstrap/Nav';
import { Collection, Bookmark, Globe, Heart, Search, Star,  } from 'react-bootstrap-icons';


const Saved = () => {
    return (
        <>
            <Nav.Link>
                <Collection className='m-2' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link>
                <Bookmark className='m-2' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link>
                <Globe className='m-2' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link>
                <Heart className='m-2' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link>
                <Search className='m-2' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link>
                <Star className='m-2' action='true' color="white" size={40}/>
            </Nav.Link>
        </>
    )
}

export default Saved;