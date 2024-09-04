import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Login({ setUser }) {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
            mirror: false,
        });
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/api/users/login', {
                email,
                password
            });
            
            console.log('Login response:', response.data);

            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.user.userId || '');

                // Set the user details (assuming response includes user details)
                setUser(response.data.user);

                navigate('/home', { state: { loginSuccess: true } });
                alert("Login Successful");
            } else {
                setError('Login failed. Please check your credentials.');
            }
        } catch (err) {
            console.error('Error during login:', err);
            setError('An error occurred during login');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='container d-flex justify-content-center align-items-center vh-100 my-3' data-aos="flip-left">
            <div className="row w-100 p-5 shadow rounded bg-secondary text-light">
                <div className="col-lg-6 image-container">
                    <img
                        src='logofav.jpg'
                        alt="login-image"
                        className="img-fluid"
                        style={{ borderRadius: "15px" }}
                    />
                    <p className="mt-3">Don't have an account?
                        <Link to="/signup" className="text-decoration-none m-3" style={{fontWeight:"500", color:"#3bf4fb"}}>Sign Up</Link>
                    </p>
                </div>
                <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center p-5 bg-dark rounded shadow" data-aos="fade-down">
                    <h2 className='display-4 mb-4'>Log In</h2>
                    <form onSubmit={handleSubmit} className="w-100" data-aos="fade-up">
                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control bg-secondary text-light"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control bg-secondary text-light"
                                required
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={handleRememberMeChange}
                                className="form-check-input"
                                id="rememberMe"
                            />
                            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                        <hr className='mt-5 mb-4 border-secondary-subtle' />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
