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
    date_of_birth: '',
    first_name: '',
    last_name: ''
}

const SignUpForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const [country, setCountry] = useState(null);
    const { email, username, password, confirmPassword, date_of_birth, first_name, last_name } = formFields;
    
    const resetForm = () => {
        setFormFields(defaultFormFields);
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
            dispatch(signUpStart(username, email, password, country.name, date_of_birth, first_name, last_name));
            resetForm();
            navigate('/profile');
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
                    <label htmlFor="inputFirst_Name" className="form-label">First Name</label>
                    <input 
                        type="first_name" 
                        required 
                        onChange={handleChange} 
                        name="first_name" 
                        value={first_name} 
                        className="form-control" 
                        id="inputFirstName"
                        placeholder="Major"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputLast_Name" className="form-label">Last Name</label>
                    <input 
                        type="last_name" 
                        required 
                        onChange={handleChange} 
                        name="last_name" 
                        value={last_name} 
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
                        name="date_of_birth" 
                        value={date_of_birth} 
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