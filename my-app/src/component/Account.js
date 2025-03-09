import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Account.css';
import Navbar from './Navbar';
import { DarkModeContext } from "../component/DarkModeContext"; // Import Dark Mode Context

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const { isDarkMode } = useContext(DarkModeContext); // Use dark mode state

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (!loggedInUser) {
      navigate('/signin');
    } else {
      setUser(loggedInUser);
    }
  }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    navigate('/signin');
  };

  return (
    <>
      <Navbar />

      <div className={`account-container ${isDarkMode ? "dark-mode" : ""}`}>
        <h2>Account Settings</h2>
        {user ? (
          <div className="account-details">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <button onClick={handleSignOut} className="signout-button">Sign Out</button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Account;
