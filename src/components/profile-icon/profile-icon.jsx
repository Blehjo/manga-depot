
import { Badge } from 'react-bootstrap';


import { PersonCircle } from 'react-bootstrap-icons';

const ProfileIcon = () => {
    
    return (
        <div className='' >
            <PersonCircle size={30} className='' ></PersonCircle>
            <Badge bg="info">9</Badge>
        </div>
    )
}

export default ProfileIcon;