import Nav from 'react-bootstrap/Nav';
import { Collection, Bookmark, Globe, Heart, Search, House, Recycle, Usb } from 'react-bootstrap-icons';


const Saved = () => {
    return (
        <>
            <Nav.Link href="/">
                <House className='mt-4' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link href="/explore">
                <Search className='mt-4' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link href="/dashboard">
                <Collection className='mt-4' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link href="/savedgames">
                <Bookmark className='mt-4' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link href="/">
                <Globe className='mt-4' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link href="/likedposts">
                <Heart className='mt-4' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link href="/history">
                <Recycle className='mt-4' action='true' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link href="/connections">
                <Usb className='mt-4' action='true' color="white" size={40}/>
            </Nav.Link>
        </>
    )
}

export default Saved;