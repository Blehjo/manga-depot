import { UserContext } from '../../contexts/user.context';
import { Fragment, useContext } from 'react';
import { useNavigate } from 'react-router';

import SignUpForm from '../../components/sign-up-form/sign-up-form';
import SignInForm from '../../components/sign-in-form/sign-in-form';

const Authentication = () => {
    const { currentUser } = useContext(UserContext);
    const navigate = useNavigate();

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