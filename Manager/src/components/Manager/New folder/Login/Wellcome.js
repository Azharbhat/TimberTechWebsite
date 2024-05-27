import React from 'react';
import { Link } from 'react-router-dom';
import './Wellcome.css'; // Import the CSS file

const Wellcome = () => {
  return (
    <div className="containe">
      <h1 className="heading">Timber Tech</h1>
      <div className="buttonContainer">
        <Link to="/MillList" className="link">
          <button className="button">Worker/Customer</button>
        </Link>
        <Link to="/Login" className="link">
          <button className="button">Manager</button>
        </Link>
      </div>
    </div>
  );
};

export default Wellcome;
