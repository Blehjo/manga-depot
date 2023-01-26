import { Fragment } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

import SignUpForm from '../sign-up-form';
import SignInForm from '../sign-in-form';
import { selectCurrentUser } from '../../store/user/user.selector';

const Authentication = () => {
    const navigate = useNavigate();
    const currentUser = useSelector(selectCurrentUser);

    return (
        <Fragment>
        {
            currentUser ? (
                navigate('/dashboard')
            ) : ( 
                <Fragment>
                    <SignInForm/>
                    <SignUpForm/>
                </Fragment>
            )
        }
        </Fragment>
    )
}

export default Authentication;