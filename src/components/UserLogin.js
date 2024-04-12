// UserLogin.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './userlogin.css'; // Import the CSS file

const UserLogin = () => {
  // State for storing username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // State for error message
  const [errorMessage, setErrorMessage] = useState('');
  // Access the navigation function
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!username || !password) {
      setErrorMessage('Please enter both username and password');
      return;
    }
    // Call API to authenticate user
    // For demo, assume login is successful
    // Redirect user to items page
    navigate('/items');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default UserLogin;
