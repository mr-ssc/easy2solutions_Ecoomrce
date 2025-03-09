import React, { useContext } from "react";
import { DarkModeContext } from "../component/DarkModeContext";
import "./Contact.css";

const Contact = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <>
    <div className={`contact-container ${isDarkMode ? "dark-mode" : ""}`}>
      <h1>Get in touch</h1>
      <p>We will catch you as early as we receive the message</p>

      <form className="contact-form">
        <div className="form-group">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Name" required />
        </div>

        <div className="form-group">
          <i className="fas fa-mobile-alt"></i>
          <input type="text" placeholder="Mobile No" required />
        </div>

        <div className="form-group">
          <i className="fas fa-envelope"></i>
          <input type="email" placeholder="Email" required />
        </div>

        <div className="form-group">
          <i className="fas fa-heart"></i>
          <select>
            <option value="">Interested in</option>
            <option value="web">Web</option>
            <option value="app">App</option>
            <option value="graphic">Graphic</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <i className="fas fa-map-marker-alt"></i>
          <input type="text" placeholder="Location" required />
        </div>

        <div className="form-group">
          <i className="fab fa-whatsapp"></i>
          <input type="text" placeholder="WhatsApp No" required />
        </div>

        <div className="form-group">
          <i className="fas fa-file-alt"></i>
          <textarea placeholder="Brief about the project" required></textarea>
        </div>

        

        <button type="submit" className="submit-btn">
          Submit 📩
        </button>
      </form>
    </div>
    </>
  );
};

export default Contact;