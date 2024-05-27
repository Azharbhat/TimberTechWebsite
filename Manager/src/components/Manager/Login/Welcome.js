import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="WellComeContainer">
      <div className="contentContainer">
        <h1 className="title">Welcome to the TimberTech</h1>
        <p className="description">Experience the beauty of woodworking and craftsmanship.</p>
      </div>
      <div className="buttonRow">
        <Link to="/MillList" className="button workerButton">
          Employee/BoxBuyers
        </Link>
        <Link to="/login" className="button managerButton">
          Manager
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
