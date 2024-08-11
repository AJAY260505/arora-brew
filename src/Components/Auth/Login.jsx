import React, { useState } from 'react';
import styles from '/src/Components/Auth/AuthForm.module.css'; // Assuming you use this CSS module for styling

const Login = ({ switchToSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className={styles.authForm}>
      <h2 className={styles.title}>Login</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Login</button>
        <p className={styles.switchText}>
          Don't have an account?{' '}
          <button type="button" onClick={() => switchToSignUp(true)} className={styles.switchButton}>Sign Up</button>
        </p>
      </form>
    </div>
  );
};

export default Login;