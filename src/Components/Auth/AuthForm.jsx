import React, { useState } from 'react';
import Login from './Login';
import SignUp from 'src/Components/Auth/Signup.jsx';
import styles from './AuthForm.module.css'; // Adjust this path if needed

const AuthForm = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // Start with Login form

  return (
    <div className={styles.authForm}>
      <div className={styles.switchButtons}>
        <button
          onClick={() => setIsLogin(true)}
          className={`${styles.switchButton} ${isLogin ? styles.active : ''}`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`${styles.switchButton} ${!isLogin ? styles.active : ''}`}
        >
          Sign Up
        </button>
      </div>
      {isLogin ? (
        <Login switchToSignUp={setIsLogin} />
      ) : (
        <SignUp switchToSignIn={setIsLogin} />
      )}
      <button onClick={onClose} className={styles.closeButton}>Close</button>
    </div>
  );
};

export default AuthForm;