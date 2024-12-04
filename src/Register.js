import React, { useState } from 'react';
import './Auth.css';

function Register({ onRegister, toggleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (username && password) {
      const user = { username, password };
      localStorage.setItem('user', JSON.stringify(user));
      console.log('User registered:', user);
      onRegister(); // Memanggil fungsi onRegister setelah sukses menyimpan
    } else {
      alert('Please enter a username and password');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
        <p className="auth-toggle" onClick={toggleLogin}>
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}

export default Register;
