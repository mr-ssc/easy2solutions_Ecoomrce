import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  signInWithPopup } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './SignIn.css';
import Navbar from './Navbar';
import { DarkModeContext } from './DarkModeContext';
import { auth, googleProvider } from '../component/Firebase/firebaseConfig';

const SignIn = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { isDarkMode } = useContext(DarkModeContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;

            // Store user details in localStorage
            localStorage.setItem('user', JSON.stringify({
                name: user.displayName || 'No Name',
                email: user.email,
                uid: user.uid
            }));

            navigate('/account');  // Navigate after successful login
        } catch (error) {
            console.error("Login Error:", error);
            alert("Invalid email or password!");
        }
    };


    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            localStorage.setItem('user', JSON.stringify({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            }));
            navigate('/account');
        } catch (error) {
            console.error('Google Sign-In Error:', error);
            alert(error.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className={`signin-container ${isDarkMode ? 'dark-mode' : ''}`}>
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Sign In</button>
                </form>
                <button onClick={handleGoogleSignIn} className="google-signin">
                    <i className="fab fa-google"></i> Sign In with Google
                </button>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                <p><Link to="/ForgotPassword">Forgot Password?</Link></p>
            </div>
        </>
    );
};

export default SignIn;
