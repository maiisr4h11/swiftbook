import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.fullName) formErrors.fullName = 'Full Name is required';
        if (!formData.email) formErrors.email = 'Email is required';
        if (!formData.password) formErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) {
            formErrors.confirmPassword = 'Passwords do not match';
        }
        return formErrors;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            try {
                // Send signup data to the backend
                const response = await axios.post('http://localhost:5000/api/users/signup', {
                    name: formData.fullName,
                    email: formData.email,
                    password: formData.password,
                });

                if (response.status === 201) {
                    setIsSubmitted(true);
                    setMessage('Signup successful!');
                    // Redirect to the login page after successful signup
                    navigate('/login');
                }
            } catch (error) {
                console.error('Signup error:', error);
                setMessage('Error during signup. Please try again.');
            }
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className='container d-flex justify-content-center align-items-center vh-100'>
            <div className="form-container signup-panel d-flex justify-content-evenly align-items-center p-5 shadow rounded bg-secondary w-100 vh-50">
                <div className='image-container left object-fit'>
                    <img 
                        src='logofav.jpg' 
                        alt="signup-image" 
                        className="img-fluid"
                        style={{borderRadius:"15px"}}
                    />
                    <p className="mt-3 text-light">
                        Already have an account? 
                        <Link to="/login" 
                        className="text-decoration-none text-primary">Log In</Link>
                    </p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center rounded shadow p-5 bg-dark text-light login-page">
                    <div className="mb-5">
                        <h2 className='display-4 p-3'>Sign Up</h2>
                    </div>
                    {isSubmitted ? (
                        <div className="success-message text-center">{message}</div>
                    ) : (
                        <form onSubmit={handleSubmit} className="w-100">
                            <div className="mb-3">
                                <label className="form-label">Full Name:</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="form-control bg-secondary text-light"
                                    required
                                />
                                {errors.fullName && <span className="error text-danger">{errors.fullName}</span>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control bg-secondary text-light"
                                    required
                                />
                                {errors.email && <span className="error text-danger">{errors.email}</span>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="form-control bg-secondary text-light"
                                    required
                                />
                                {errors.password && <span className="error text-danger">{errors.password}</span>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm Password:</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="form-control bg-secondary text-light"
                                    required
                                />
                                {errors.confirmPassword && <span className="error text-danger">{errors.confirmPassword}</span>}
                            </div>
                            <button type="submit" className="btn w-100">Sign Up</button>
                            {message && <p>{message}</p>}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Signup;
