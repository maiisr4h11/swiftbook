import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import Logo from '../Assets/SwiftbookLogo.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';




function Login() {

    const navigate = useNavigate(); // Initialize the useNavigate hook

    AOS.init({
        duration: 1200, // Values from 0 to 3000, with step 50ms
        once: false, // Whether animation should happen only once - while scrolling down
        mirror: false, // Whether elements should animate out while scrolling past them
    });

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Instead of logging the whole event, log specific fields
        console.log("Email:", email);
        console.log("Password:", password);

        // Proceed with your login logic
        navigate('/', { state: { loginSuccess: true } });
        alert("Login Successful");
    };




    return (
        <div className='container d-flex justify-content-center align-items-center vh-100' data-aos="flip-left">

            <div className="form-container login-panel d-flex justify-content-evenly align-items-center p-5 shadow rounded bg-white w-100 vh-50">
                <div className='image-container left object-fit img-fluid'>
                    <img src={Logo} alt="login-image"></img>
                    <p className="mt-3">Don't have an account? <Link to="/Signup" className="text-decoration-none">Sign Up</Link></p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center rounded shadow p-5 bg-light" data-aos="fade-down">
                    <div className="mb-5">
                        <h2 className='display-4 p-3'>Log In</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="w-100 " data-aos="fade-up">
                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password:</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required />
                        </div>
                        <div className="mb-3 form-check">
                            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                            <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} className="form-check-input" id="rememberMe" />
                        </div>
                        <button type="submit" className="btn btn-primary w-100" >Login</button>
                        <hr className='mt-5 mb-4 border-secondary-subtle' />
                        <div class="text-end">
                            <a href="#!" class="link-secondary text-decoration-none">Forgot password</a>
                        </div>

                    </form>
                </div>


            </div>


        </div>
    )
}

export default Login