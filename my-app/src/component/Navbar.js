import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";
import logo from "../component/Img/Easy2Solutions.png";
import { DarkModeContext } from "../component/DarkModeContext";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <nav className={`navbar ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <button className="search-btn">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      {/* Navigation Links */}
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <div className="navbar-item">
          <Link className="navbar-item" to="/">
            <i className="fas fa-th-large"></i>
            <span>Products</span>
          </Link>
        </div>
        <div className="navbar-item">
          <Link className="navbar-item" to="/Cart">
            <i className="fas fa-shopping-cart"></i>
            <span>Cart</span>
          </Link>
        </div>
        <div className="navbar-item">
          <Link className="navbar-item" to="/Account">
            <i className="fas fa-user"></i>
            <span>Account</span>
          </Link>
        </div>
        <div className="navbar-item" onClick={toggleDarkMode}>
          <i className={isDarkMode ? "fas fa-sun" : "fas fa-moon"}></i>
          <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;