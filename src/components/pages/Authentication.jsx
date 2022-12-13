import SignUpForm from '../../components/sign-up-form/sign-up-form';
import SignInForm from '../../components/sign-in-form/sign-in-form';

import { UserContext } from '../../contexts/user.context';
import { Fragment, useContext } from 'react';
import { useNavigate } from 'react-router';

const Authentication = () => {
    const { currentUser } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <>
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
        </>
    )
}

export default Authentication;