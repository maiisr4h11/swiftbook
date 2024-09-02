import React from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ user, setUser }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const showNavbarAndFooter = location.pathname !== '/login';

    const handleLogout = () => {
        console.log('Logging out...');
        localStorage.removeItem('token');
        setUser(null); // Clear the user state
        navigate('/login'); // Redirect to login page
    };

    return (
        <div>
            {showNavbarAndFooter && <Navbar user={user} handleLogout={handleLogout} />}
            <main>
                {/* Outlet will render the current matched child route */}
                <Outlet />
            </main>
            {showNavbarAndFooter && <Footer />}
        </div>
    );
};

export default Layout;
