import React, { useState } from 'react';

function Security({ user }) {  // Added user as a prop
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
            const response = await fetch(`/api/users/update-password/${user.userId}`, {
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
        }
    };

    return (
        <div>
            <div className="container-xl px-4 mt-4">
                <h1 className="my-4">Security</h1>
                <form onSubmit={handleChangePassword}>
                    <div className="mb-3">
                        <label htmlFor="currentPassword" className="form-label">Current Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="currentPassword"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="newPassword" className="form-label">New Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Change Password</button>
                </form>
            </div>
        </div>
    );
}

export default Security;
