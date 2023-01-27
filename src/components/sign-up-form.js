import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import CountrySelect from 'react-bootstrap-country-select';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpStart } from "../store/user/user.action";

const defaultFormFields = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    firstName: '',
    lastName: ''
}

const SignUpForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const [country, setCountry] = useState(null);
    const { email, username, password, confirmPassword,  dateOfBirth, firstName, lastName } = formFields;
    
    const resetForm = () => {
        setFormFields(defaultFormFields);
    }

    const signUpWithReact = (formFields) => {
        console.log("formFields: ", formFields);
        dispatch(signUpStart(email, username, password, confirmPassword,  dateOfBirth, firstName, lastName));
        resetForm();
        navigate('/profile');
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            signUpWithReact();
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
                    <label htmlFor="inputUsername" className="form-label">Display Name</label>
                    <input 
                        required 
                        onChange={handleChange} 
                        name="username" 
                        value={username} 
                        type="username" 
                        className="form-control" 
                        id="inputUsername" 
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
                        type="firstName" 
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
                        type="lastName" 
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