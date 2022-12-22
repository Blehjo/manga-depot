import Nav from 'react-bootstrap/Nav';
import { Collection, Router, Globe, House, Eye, Speedometer2, ArrowRepeat, ChatDots } from 'react-bootstrap-icons';


const Saved = () => {
    return (
        <>
            <Nav.Link href="/profile">
                <House className='mt-4' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link href="/dashboard">
                <Speedometer2 className='mt-4' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link href="/messages">
                <ChatDots className='mt-4' action='true' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link href="/discovery">
                <Collection className='mt-4' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link href="/explore">
                <Eye className='mt-4' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link href="/interactions">
                <Router className='mt-4' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link href="/connections">
                <ArrowRepeat className='mt-4' action='true' color="white" size={40}/>
            </Nav.Link>
            <Nav.Link href="/search">
                <Globe className='mt-4' color="white" size={40}/>
            </Nav.Link>
        </>
    )
}

export default Saved;