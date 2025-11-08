import React, { useState } from 'react';
import './Auth.css';
function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // For demo, just allow login
    // In real world, validate credentials!
    onLogin();
  };

  return (
    <div className="auth-container">
      <h2>Log In</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <label>
          Username
          <input
            type="text"
            value={username}
            required
            onChange={e => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginPage;