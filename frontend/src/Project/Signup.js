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
        <div className='container d-flex justify-content-center align-items-center vh-100 my-3' data-aos="flip-left">
            <div className="form-container signup-panel d-flex flex-column flex-md-row justify-content-center align-items-center p-3 p-md-5 shadow rounded bg-secondary w-100">
                <div className='image-container left object-fit w-100 w-md-50 me-md-4 mb-4 mb-md-0'>
                    <img
                        src='logofav.jpg'
                        alt="signup-image"
                        className="img-fluid w-100"
                        style={{ borderRadius: "15px" }}
                    />
                    <p className="mt-3">
                        Already have an account?
                        <Link to="/login" className="text-decoration-none m-3" style={{ fontWeight: "500", color: "#3bf4fb" }}>Log In</Link>
                    </p>
                </div>
                <div className="form-section d-flex flex-column justify-content-center align-items-center rounded shadow p-3 p-md-5 bg-dark w-100 w-md-50">
                    <div className="mb-4 mb-md-5">
                        <h2 className='display-4 p-3 text-light'>Sign Up</h2>
                    </div>
                    {isSubmitted ? (
                        <div className="success-message text-center">{message}</div>
                    ) : (
                        <form onSubmit={handleSubmit} className="w-100" data-aos="fade-up">
                            <div className="mb-3">
                                <label className="form-label text-light">Full Name:</label>
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
                                <label className="form-label text-light">Email:</label>
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
                                <label className="form-label text-light">Password:</label>
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
                                <label className="form-label text-light">Confirm Password:</label>
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
                            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                            {message && <p className="mt-3 text-light">{message}</p>}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Signup;
