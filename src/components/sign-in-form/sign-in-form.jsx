import { useState } from "react";

import FormInput from "../form-input/form-input";
import { Button } from "react-bootstrap";

import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields();
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(
                email, 
                password
            );
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
        // const auth = authorization;

        // response.exists();

        // confirm passwords match
        // see if we authenticated user with email and password
        // create user document
        // pass displayName when you generate document from what you get back from authuserback
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Email"
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email} 
                />

                <FormInput 
                    label="Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password} 
                />
                <div className="buttons-container">
                    <Button buttonType='inverted' type="submit">Sign In</Button>
                    <Button onClick={signInWithGoogle} buttonType='google' type='button'>Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;