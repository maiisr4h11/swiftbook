import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../Gstyles.css";

const Security = ({ user }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangePassword = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/api/users/update-password/${user.userId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({ currentPassword, newPassword }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Password changed successfully');
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error('Error updating password:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="container mt-5">
            <nav className="nav nav-borders">
                <Link className="nav-link active ms-0" to="/Setting">Profile</Link>
                <Link className="nav-link" to="/Setting">Security</Link>
            </nav>
            <hr className="mt-0 mb-4" /> {/* Add the horizontal rule */}
            <h2>Change Password</h2>
            <form onSubmit={handleChangePassword}>
                <div className="form-group">
                    <label htmlFor="currentPassword">Current Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="currentPassword"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Change Password
                </button>
            </form>
        </div>
    );
};

export default Security;
