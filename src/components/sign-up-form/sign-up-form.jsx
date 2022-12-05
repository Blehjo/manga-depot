import { useState } from "react";

import FormInput from "../form-input/form-input";
import { Button } from "react-bootstrap";

import CountrySelect from 'react-bootstrap-country-select';

import axios from "axios";

import { 
    createAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import './sign-up-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const [country, setCountry] = useState(null);
    const { displayName, email, password, confirmPassword,  dateOfBirth, firstName, lastName } = formFields;

    const resetForm = () => {
        setFormFields();
    }

    const signInWithReact = async () => {
        await axios.post(`/api/users/`,
        {
            username: displayName,
            email: email,
            password: password,
            country: country.name,
            date_of_birth: dateOfBirth,
            first_name: firstName,
            last_name: lastName
        })
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('error message');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email, 
                password
            );

            await signInWithReact();
            await createAuthUserWithEmailAndPassword(user);
            resetForm();

        } catch(error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Display Name"
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="displayName" 
                    value={displayName} 
                />

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

                <FormInput 
                    label="Confirm Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword} 
                />

                <CountrySelect
                    value={country}
                    onChange={setCountry}
                />

                <FormInput 
                    label=""
                    type="date" 
                    required 
                    onChange={handleChange} 
                    name="dateOfBirth" 
                    value={dateOfBirth} 
                />

                <FormInput 
                    label="First Name"
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="firstName" 
                    value={firstName} 
                />
                <FormInput 
                    label="Last Name"
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="lastName" 
                    value={lastName} 
                />

                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default SignUpForm;