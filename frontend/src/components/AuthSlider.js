import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import './style/Login .css'; // Ensure this path is correct

function AuthSlider({ setUser }) {
    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }, []);




    const navigate = useNavigate();
    AOS.init({ duration: 1200, once: false, mirror: false });

    // Shared state between login and signup
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [signupData, setSignupData] = useState({
        fullName: '',
        confirmPassword: '',
    });
    const [signupErrors, setSignupErrors] = useState({});
    const [signupMessage, setSignupMessage] = useState('');


    // Handle form changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else {
            setSignupData({
                ...signupData,
                [name]: value,
            });
        }
    };


    // Login submission
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/api/users/login', {
                email,
                password,
            });

            console.log('Login response:', response.data);

            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.user.userId || '');

                setUser(response.data.user);
                navigate('/home', { state: { loginSuccess: true } });
                alert('Login Successful');
            } else {
                setError('Login failed. Please check your credentials.');
            }
        } catch (err) {
            console.error('Login error:', err.response ? err.response.data : err.message);
            setError('An error occurred during login');
        }
        finally {
            setLoading(false);
        }
    };

    // Alphanumeric password check
    const isAlphanumeric = (str) => /^[a-zA-Z0-9]+$/.test(str);

    // Signup validation
    const validateSignupForm = () => {
        let formErrors = {};
        if (!signupData.fullName) formErrors.fullName = 'Full Name is required';
        if (!email) formErrors.email = 'Email is required';
        if (!password) formErrors.password = 'Password is required';
        if (password !== signupData.confirmPassword) {
            formErrors.confirmPassword = 'Passwords do not match';
        }
        if (!isAlphanumeric(password)) {
            formErrors.password = 'Password must be alphanumeric';
        }
        return formErrors;
    };

    // Signup submission
    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateSignupForm();
        if (Object.keys(formErrors).length === 0) {
            try {
                const response = await axios.post('http://localhost:5000/api/users/signup', {
                    name: signupData.fullName,
                    email,
                    password,
                });

                if (response.status === 201) {
                    setSignupMessage('Signup successful!');
                    navigate('/');
                }
            } catch (error) {
                setSignupMessage('Error during signup. Please try again.');
            }
        } else {
            setSignupErrors(formErrors);
        }
    };

    return (
        <div className="container" id="container" data-aos="fade-up">
            <div className="form-container sign-up-container">

                <form onSubmit={handleSignupSubmit}>
                    <h1>Create Account</h1>
                    <input
                        type="text"
                        placeholder="Name"
                        name="fullName"
                        value={signupData.fullName}
                        onChange={handleChange}
                    />
                    {signupErrors.fullName && <span>{signupErrors.fullName}</span>}
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                    {signupErrors.email && <span>{signupErrors.email}</span>}
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                    {signupErrors.password && <span>{signupErrors.password}</span>}
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={signupData.confirmPassword}
                        onChange={handleChange}
                    />
                    {signupErrors.confirmPassword && <span>{signupErrors.confirmPassword}</span>}
                    <button type="submit">Sign Up</button>
                    {signupMessage && <span>{signupMessage}</span>}
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form onSubmit={handleLoginSubmit}>
                    <h1>Sign in</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />

                    <button type="submit" disabled={loading}>
                        {loading ? 'Logging in...' : 'Sign In'}
                    </button>
                    {error && <span>{error}</span>}
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome aboard!</h1>
                        <p>Log in to keep connected and effortlessly manage your events and bookings with us.</p>
                        <button className="ghost" id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Welcome, Event Buff!</h1>
                        <p>Share your details and embark on your event adventure with us!</p>
                        <button className="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthSlider;
