import React, { useState } from 'react';
import './Auth.css';
function SignupPage({ onSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Here, you'd normally call an API
    // For demo, just flag registration as "complete"
    onSignup();
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup} className="auth-form">
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;