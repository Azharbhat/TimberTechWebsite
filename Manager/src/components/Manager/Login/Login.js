import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Firebase/FirebaseConfig';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { IoMdPerson } from 'react-icons/io';
import './Login.css';


const Login = ({ title }) => {
  const navigate = useNavigate(); // Use useNavigate hook instead of useHistory
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Redirect authenticated user to another page
        navigate('/dashboard');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleAuthentication = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed in successfully!');

      // After successful login, redirect user to dashboard
      navigate('/dashboard');
      
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="container">
      <div className="glassContainer">
        <h1 className="title">TimberTech</h1>
        <h2 className="title">{title} LogIn</h2>
        <IoMdPerson size={60} color="#CD853F" style={{ margin: '10px' }} />

        <div className="inputContainer">
          <IoMdPerson size={24} color="#CD853F" style={{ margin: '10px' }} />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="off"
            className="input"
          />
        </div>

        <div className="inputContainer">
          <IoMdPerson size={24} color="#CD853F" style={{ margin: '10px' }} />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="input"
          />
        </div>

        {errorMessage && (
          <div className="errorContainer">
            <IoMdPerson size={20} color="red" style={{ marginRight: '10px' }} />
            <span className="errorMessageText">{errorMessage}</span>
          </div>
        )}
        <button className="button" onClick={handleAuthentication}>
          Login
        </button>
        <div className="buttonContainer">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <button onClick={navigateToRegister} style={{ color: 'red' }}>
              Forget password
            </button>
            <button onClick={navigateToRegister} style={{ color: 'green' }}>
              Go to Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
