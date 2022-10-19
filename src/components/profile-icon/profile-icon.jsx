import { useContext } from 'react';

import { ProfileContext } from '../../contexts/profile.context';

import { PersonCircle } from 'react-bootstrap-icons';

const ProfileIcon = () => {
    const { isProfileOpen, setIsProfileOpen } = useContext(ProfileContext);

    const toggleIsProfileOpen = () => setIsProfileOpen(!isProfileOpen);
    
    return (
        <div className='' onClick={toggleIsProfileOpen}>
            <PersonCircle size={25} className='' />
            {/* <span className='item-count'>0</span> */}
        </div>
    )
}

export default ProfileIcon;