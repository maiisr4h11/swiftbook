import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// Include Bootstrap CSS via CDN in index.html
// <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">

function App() {
    const [darkMode, setDarkMode] = useState(() =>
        localStorage.getItem('darkMode') === 'true'
    );

    useEffect(() => {
        document.body.classList.toggle('bg-dark', darkMode);
        document.body.classList.toggle('text-light', darkMode);
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

    return (
        <div className={`container${darkMode ? ' dark-mode' : ''}`}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="btn btn-outline-primary" onClick={toggleDarkMode}>
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </nav>
            <main className="mt-4">
                <h1>Hello, world!</h1>
                <p>This is a simple example of a dark mode toggle.</p>
            </main>
            <style>
                {`
                /* Dark Mode Styles */
                .dark-mode {
                    background-color: #343a40; /* Dark background */
                    color: #f8f9fa; /* Light text color */
                }

                .dark-mode .navbar {
                    background-color: #212529; /* Dark navbar background */
                }

                .dark-mode .btn-outline-primary {
                    color: #f8f9fa; /* Light text color for button */
                    border-color: #f8f9fa; /* Light border color for button */
                }

                .dark-mode .btn-outline-primary:hover {
                    background-color: #495057; /* Darker background on hover */
                    border-color: #495057; /* Darker border color on hover */
                }
                `}
            </style>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
