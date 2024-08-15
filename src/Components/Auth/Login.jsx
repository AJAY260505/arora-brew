import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig'; // Make sure this path is correct
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false); // Track whether to show login or signup

    const handleAuth = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            if (isSignUp) {
                await createUserWithEmailAndPassword(auth, email, password);
                alert("User created successfully! You can now log in.");
                setIsSignUp(false);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
                console.log("User signed in successfully");
                // Redirect to dashboard or home page
            }
        } catch (err) {
            console.error("Authentication failed:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        // Handle close action, e.g., hide the login form or redirect
        window.location.href = "/"; // Redirect to home or another page
    };

    return (
        <div className="login-container">
            <button className="close-button" onClick={handleClose}>×</button>
            <div className="login-image"></div>
            <div className="login-form">
                <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
                <form onSubmit={handleAuth}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Login')}
                    </button>
                    {error && <p className="error-message">{error}</p>}
                    <button
                        type="button"
                        className="switch"
                        onClick={() => setIsSignUp(!isSignUp)}
                    >
                        {isSignUp ? 'Already have an account? Sign In' : 'New here? Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;