import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // You can use the same CSS or create a new one for Signup
import Logo from '../Assets/SwiftbookLogo.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Signup() {
    const navigate = useNavigate();

    AOS.init({
        duration: 1200,
        once: false,
        mirror: false,
    });

    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({}); //This is for the error messages
    const [isSubmitted, setIsSubmitted] = useState(false); //this is for the success message

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, // ... is the spread operator
            [name]: value,
        });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.fullName) formErrors.fullName = 'Full Name is required';
        if (!formData.username) formErrors.username = 'Username is required';
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
                const response = await fetch('http://localhost:5000/api/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ // Convert the form data to JSON string
                        name: formData.fullName,
                        username: formData.username,
                        email: formData.email,
                        password: formData.password,
                    }),
                });

                if (response.ok) {
                    setIsSubmitted(true);
                    navigate('/', { state: { signupSuccess: true } });
                    alert("Signup Successful");
                } else {
                    const data = await response.json();
                    alert(data.message || 'Signup failed');
                }
            } catch (error) {
                console.error('Error during signup:', error);
                alert('An error occurred during signup');
            }
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className='container d-flex justify-content-center align-items-center vh-100' data-aos="flip-left">
            <div className="form-container signup-panel d-flex justify-content-evenly align-items-center p-5 shadow rounded bg-white w-100 vh-50">
                <div className='image-container left object-fit'>
                    <img src={Logo} alt="signup-image" />
                    <p className="mt-3">
                        Already have an account? <Link to="/Login" className="text-decoration-none">Log In</Link>
                    </p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center rounded shadow p-5 bg-light" data-aos="fade-down">
                    <div className="mb-5">
                        <h2 className='display-4 p-3'>Sign Up</h2>
                    </div>
                    {isSubmitted ? (
                        <div className="success-message text-center">Sign up successful!</div>
                    ) : (
                        <form onSubmit={handleSubmit} className="w-100" data-aos="fade-up">
                            <div className="mb-3">
                                <label className="form-label">Full Name:</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                                {errors.fullName && <span className="error text-danger">{errors.fullName}</span>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Username:</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                                {errors.username && <span className="error text-danger">{errors.username}</span>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control"
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
                                    className="form-control"
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
                                    className="form-control"
                                    required
                                />
                                {errors.confirmPassword && <span className="error text-danger">{errors.confirmPassword}</span>}
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Signup;
