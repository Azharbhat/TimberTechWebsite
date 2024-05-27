import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Register.css'; // Import CSS file

function Register() {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form">
        {/* Input fields for registration */}
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        {/* Submit button */}
        <button type="submit"> <Link to="/Home">Home</Link></button>
      </form>
      {/* Link to navigate back to the login page */}
      <p>Already have an account? <Link to="/Login">Login</Link></p>
      <p>Wellcome Page <Link to="/">Wellcome</Link></p>
    </div>
  );
}

export default Register;
