import React, { useContext } from "react";
import "./SubFooter.css";
import { DarkModeContext } from "./DarkModeContext";

const SubFooter = () => {
    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <div className={`subfooter ${isDarkMode ? "dark-mode" : ""}`}>
            {/* Social Media Icons */}
            <div className="social-icons">
                <a
                    href="https://www.instagram.com/easy2_solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-instagram icon"></i>
                </a>
                <a
                    href="https://www.linkedin.com/company/easy2solutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin icon"></i>
                </a>
                <a
                    href="https://wa.me/919687283344"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-whatsapp icon"></i>
                </a>
                <a
                    href="https://www.facebook.com/people/Easy2solutions/100095081834202/?mibextid=LQQJ4d&rdid=amIfjHI4rsNfgeVl&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FErwJPfZ8x7TA9qcX%2F%3Fmibextid%3DLQQJ4d"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-facebook icon"></i>
                </a>
            </div>

            {/* Copyright Notice */}
            <div className="copyright">
                <p>Copyright © Easy2solutions 2025. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default SubFooter;