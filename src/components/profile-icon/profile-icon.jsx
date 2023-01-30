import { Badge } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setIsProfileOpen } from '../../store/profile/profile.action';
import { selectIsProfileOpen } from '../../store/profile/profile.selector';


const ProfileIcon = () => {
    const dispatch = useDispatch();
    const isProfileOpen = useSelector(selectIsProfileOpen);
    const toggleIsProfileOpen = () => dispatch(setIsProfileOpen(!isProfileOpen));
    
    return (
        <div >
            <PersonCircle onClick={toggleIsProfileOpen} size={30} ></PersonCircle>
            <Badge bg="info"></Badge>
        </div>
    )
}

export default ProfileIcon;