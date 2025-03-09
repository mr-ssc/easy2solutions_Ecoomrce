import React, { useContext } from "react";
import "./Footer.css";
import logo from "../component/Img/Easy2Solutions.png";
import { DarkModeContext } from "../component/DarkModeContext";


const Footer = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <footer className={`footer ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Logo and Description Section */}
      <div className="footer-section">
        <div className="logo-section">
          <img src={logo} alt="Easy2Solutions Logo" className="logo" />
          <p className="description">
            Easy2Solutions is one of the most creative and experienced Web & Mobile app development companies in India.
          </p>
          <button className={`contact-btn ${isDarkMode ? "dark-mode" : ""}`}>Get a Contact</button>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="footer-section">
        <h3 className="section-heading">Contact Us</h3>
        <ul className="contact-list">
          <li>
            <span className="icon">📧</span>
            <a href="mailto:sales@easy2solutions.com">sales@easy2solutions.com</a>
          </li>
          <li>
            <span className="icon">📞</span>
            <a href="tel:+919687283344">+91 96872 83344</a>
          </li>
          <li>
            <span className="icon">📍</span>
            <span>C1212, SiddhiVinayak Tower, Makaraba, Ahmedabad</span>
          </li>
        </ul>
      </div>

      {/* Quick Links Section */}
      <div className="footer-section">
        <h3 className="section-heading">Quick Links</h3>
        <ul className="quick-links">
          <li><a href="/">Home</a></li>
          <li><a href="/Category">Category</a></li>
          <li><a href="/Cart">Cart</a></li>
          <li><a href="/Account">Account</a></li>
        </ul>
      </div>

      {/* Up Arrow Button */}
      <button className={`scroll-to-top ${isDarkMode ? "dark-mode" : ""}`} onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i> {/* FontAwesome CDN icon */}
      </button>
    </footer>
  );
};

export default Footer;