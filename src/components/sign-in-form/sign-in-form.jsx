import { useState, useContext } from "react";

import FormInput from "../form-input/form-input";
import { Button } from "react-bootstrap";

import axios from "axios";

import { signInAuthUserWithEmailAndPassword, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils'

import './sign-in-form.styles.scss';

import { AuthContext } from "../../contexts/auth.context";

const SignInForm = () => {
    const { setAuth } = useContext(AuthContext);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const resetFormFields = () => {
        setEmail('');
        setPassword('');
    }

    const signInWithReact = async () => {
        await axios.post(`/api/users/login`, {
            email: email,
            password: password,
        })
        .then((resp) => setAuth(resp.data));
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGoogleRedirect();
        console.log(user)
    }

    const handleEmailChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(
                email, 
                password
            );
            signInWithReact();
            resetFormFields();
        } catch(error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default: 
                    console.log(error);
            }
        }
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Email"
                    type="email" 
                    required 
                    onChange={handleEmailChange} 
                    name="email" 
                    value={email} 
                />

                <FormInput 
                    label="Password"
                    type="password" 
                    required 
                    onChange={handlePasswordChange} 
                    name="password" 
                    value={password} 
                />
                <div className="buttons-container">
                    <Button type="submit">Sign in</Button>
                    <Button onClick={signInWithGoogle} variant="info" type='button'>Sign in with Google</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;