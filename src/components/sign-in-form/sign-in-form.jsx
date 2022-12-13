import { useState } from "react";

import FormInput from "../form-input/form-input";
import { Button } from "react-bootstrap";

import axios from "axios";

import { signInAuthUserWithEmailAndPassword, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils'

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    // const [formFields, setFormFields] = useState(defaultFormFields);
    // const { email, password } = formFields;
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const resetFormFields = () => {
        setEmail('');
        setPassword('');
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGoogleRedirect();
    }

    const handleEmailChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
        console.log(email);
    }

    const handlePasswordChange = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
        console.log(password);
    }

    const handleChange = (event) => {
        // const { name, value } = event.target;

        // setFormFields({ ...formFields, [name]: value })
        // console.log(formFields)
    };

    const signInWithReact = async () => {
        try {
            const response = await axios.post(`/api/users/login`, {
                email: email,
                password: password,
            });
            console.log(response.data);
        } catch (error) {
            console.log(error.response);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(
                email, 
                password
            );
            await signInWithReact();
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