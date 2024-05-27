import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Login.css'; // Import CSS file

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        {/* Input fields for username and password */}
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        {/* Submit button */}
        <button type="submit">Login</button>
      </form>
      {/* Link to navigate to the registration page */}
      <p>Don't have an account? <Link to="/register">Register</Link></p>
       <p>Wellcome Page <Link to="/">Wellcome</Link></p>
    </div>
  );
}

export default Login;
