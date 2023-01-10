import { useState, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import CountrySelect from 'react-bootstrap-country-select';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";

// import { 
//     createAuthUserWithEmailAndPassword,
// } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const [formFields, setFormFields] = useState(defaultFormFields);
    const [country, setCountry] = useState(null);
    const { displayName, email, password, confirmPassword,  dateOfBirth, firstName, lastName } = formFields;
    const navigate = useNavigate();

    const resetForm = () => {
        setFormFields();
    }

    const signInWithReact = async () => {
        await axios(
        {
            method: 'post',
            url: `https://shellgeistapi.herokuapp.com/api/users/`,
            data: JSON.stringify({
                username: displayName,
                email: email,
                password: password,
                country: country.name,
                date_of_birth: dateOfBirth,
                first_name: firstName,
                last_name: lastName
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: false,
        })
        .then(function (response) { 
            console.log(response);
            // setAuth(response);
        });
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
            // const { user } = await createAuthUserWithEmailAndPassword(
            //     email, 
            //     password
            // );

            await signInWithReact();
            // if (signInWithReact.ok) {
            //     document.location.replace('/')
            // } else {
            //     alert("response.statusText");
            // }
            // await createAuthUserWithEmailAndPassword(user);
            // navigate('/');
            // resetForm();

        } catch(error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    }

    return (
        <Row style={{ justifyContent: 'center', color: 'white', marginTop: '5rem' }} xs={1}>
            <Col lg={6}>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form style={{ color: 'white', marginTop: '1rem' }} onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputDisplayName" className="form-label">Display Name</label>
                    <input 
                        required 
                        onChange={handleChange} 
                        name="displayName" 
                        value={displayName} 
                        type="text" 
                        className="form-control" 
                        id="inputDisplayName" 
                        placeholder="User123"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input 
                        type="email" 
                        required 
                        onChange={handleChange} 
                        name="email" 
                        value={email} 
                        className="form-control" 
                        id="inputEmail"
                        placeholder="Kusanagi@shellgeist.com"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputFirstName" className="form-label">First Name</label>
                    <input 
                        type="text" 
                        required 
                        onChange={handleChange} 
                        name="firstName" 
                        value={firstName} 
                        className="form-control" 
                        id="inputFirstName"
                        placeholder="Major"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputLastName" className="form-label">Last Name</label>
                    <input 
                        type="text" 
                        required 
                        onChange={handleChange} 
                        name="lastName" 
                        value={lastName} 
                        className="form-control" 
                        id="inputLastName"
                        placeholder="Kusanagi"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input 
                        label="Password"
                        type="password" 
                        required 
                        onChange={handleChange} 
                        name="password" 
                        value={password} 
                        className="form-control" 
                        id="inputPassword"
                        placeholder="Password"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input 
                        label="Confirm Password"
                        type="password" 
                        required 
                        onChange={handleChange} 
                        name="confirmPassword" 
                        value={confirmPassword} 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                    />
                </div>
                <div  className="col-md-6">
                    <label htmlFor="selectCountry" className="form-label">Country</label>
                    <CountrySelect 
                    value={country}
                    onChange={setCountry}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="" className="form-label">Date of Birth</label>
                    <input 
                        required 
                        onChange={handleChange} 
                        type="date" 
                        name="dateOfBirth" 
                        value={dateOfBirth} 
                        id="selectDateOfBirth" 
                        className="form-control" 
                    />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-light">Join</button>
                </div>
            </form>
            </Col>
        </Row>
    )
}

export default SignUpForm;