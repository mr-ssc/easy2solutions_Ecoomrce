// SignUp.js
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { DarkModeContext } from "../component/DarkModeContext";
import Navbar from './Navbar';
import "./SignUp.css";
import { auth, googleProvider } from "../component/Firebase/firebaseConfig"; // Import auth and provider from firebaseConfig

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNo: '',
        gender: '',
        password: '',
        confirmPassword: '',
    });

    const { isDarkMode } = useContext(DarkModeContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            alert("User registered successfully!");
            navigate("/signin");
        } catch (error) {
            alert(error.message);
        }
    };

    const handleGoogleSignUp = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log("User Info:", result.user);
            alert("Signed up with Google successfully!");
            navigate("/signin");
        } catch (error) {
            console.error("Google Sign-Up Error:", error.message);
            alert(error.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className={`signup-container ${isDarkMode ? "dark-mode" : ""}`}>
                <div className="signup-box">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <input className='signup-input' name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                        <input className='signup-input' type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        <input className='signup-input' type="tel" name="phoneNo" placeholder="Phone Number" value={formData.phoneNo} onChange={handleChange} required />
                        <select name="gender" value={formData.gender} onChange={handleChange} required>
                            <option value="" disabled>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <input className='signup-input' type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                        <input className='signup-input' type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
                        <button type="submit"><i className="fas fa-user-plus"></i> Sign Up</button>
                    </form>
                    <button onClick={handleGoogleSignUp}><i className="fab fa-google"></i> Sign Up with Google</button>
                    <p className="signin-link">Already have an account? <Link to="/signin">Sign In</Link></p>
                </div>
            </div>
        </>
    );
};

export default SignUp;