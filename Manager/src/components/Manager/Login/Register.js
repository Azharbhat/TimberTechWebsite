import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Register.css'; // Import CSS file

const RegisterScreen = ({ title }) => {
  const [username, setUsername] = useState('');
  const [millname, setMillname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);

  const handleRegistration = async () => {
    try {
      if (!username || !email || !password) {
        alert('Validation Error', 'Please fill in all the fields.');
        return;
      }

      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
        alert('Validation Error', 'Please enter a valid email address.');
        return;
      }

      const usernameRegex = /^[a-zA-Z]+$/;
      if (!usernameRegex.test(username)) {
        alert('Validation Error', 'Username should contain only letters.');
        return;
      }

      // Registration logic here

    } catch (error) {
      console.error('Registration error:', error.message);
      alert('Error', error.message);
    }
  };

  const selectImage = async () => {
    // Image selection logic here
  };

  return (
    <div className="container">
      <div className="glassContainer">
        <h1 className="title">TimberTech</h1>
        <h2 className="title">{title} Register</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          autoComplete="none"
          className="input"
        />
        <input
          type="text"
          value={millname}
          onChange={(e) => setMillname(e.target.value)}
          placeholder="Millname"
          autoComplete="none"
          className="input"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          autoComplete="none"
          className="input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input"
        />
        <button className="imagePickerButton" onClick={selectImage}>
          Select profile
        </button>
        {image && <p>Image selected</p>}
        <div className="buttonContainer">
          <Link to="/Login">
            <button>Login</button>
          </Link>
          <Link to="/Workers">
            <button>Home</button>
          </Link>
          <button className="registerButton" onClick={handleRegistration}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
