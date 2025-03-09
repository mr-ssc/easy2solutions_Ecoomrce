import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import './ForgotPassword.css';
import Navbar from './Navbar';
import { DarkModeContext } from './DarkModeContext';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const { isDarkMode } = useContext(DarkModeContext);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent. Check your inbox!');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className={`forgot-container ${isDarkMode ? 'dark-mode' : ''}`}>
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
        {message && <p className="message">{message}</p>}
        <p>
          <Link to="/signin">Back to Sign In</Link>
        </p>
      </div>
    </>
  );
};

export default ForgotPassword;
