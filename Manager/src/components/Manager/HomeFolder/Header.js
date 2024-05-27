import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser, faBox, faToolbox, faTruck, faTree, faCalculator, faChessBoard, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const Header = ({ handleButtonPress }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  const handleNavButtonClick = () => {
    setIsNavOpen(false);
  }

  return (
    <div>
      {windowWidth <= 600 && (
        <div className="nav-toggle" onClick={toggleNav}>
          {isNavOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
        </div>
      )}
      <nav className={`navbar ${isNavOpen ? 'open' : ''}`} style={{ display: windowWidth > 600 ? 'flex' : (isNavOpen ? 'flex' : 'none') }}>
        <h4>TimberTech</h4>
        <div className="nav-buttons">
          <Link to="/Workers" onClick={handleNavButtonClick}>
            <button>
              <FontAwesomeIcon icon={faUser} />
              <span>Workers</span>
            </button>
          </Link>
          <Link to="/BoxBuyers" onClick={handleNavButtonClick}>
            <button>
              <FontAwesomeIcon icon={faBox} />
              <span>Box Buyers</span>
            </button>
          </Link>
          <Link to="/BoxMakers" onClick={handleNavButtonClick}>
            <button>
              <FontAwesomeIcon icon={faToolbox} />
              <span>Box Makers</span>
            </button>
          </Link>
          <Link to="/Transporters" onClick={handleNavButtonClick}>
            <button>
              <FontAwesomeIcon icon={faTruck} />
              <span>Transporters</span>
            </button>
          </Link>
          <Link to="/WoodCutter" onClick={handleNavButtonClick}>
            <button>
              <FontAwesomeIcon icon={faTree} />
              <span>Wood Cutter</span>
            </button>
          </Link>
          <Link to="/Attendance" onClick={handleNavButtonClick}>
            <button>
              <FontAwesomeIcon icon={faClipboardList} />
              <span>Attendance</span>
            </button>
          </Link>
          <Link to="/FlatLogCalculator" onClick={handleNavButtonClick}>
            <button>
              <FontAwesomeIcon icon={faCalculator} />
              <span>Flat Log Calculator</span>
            </button>
          </Link>
          <Link to="/LogCalculator" onClick={handleNavButtonClick}>
            <button>
              <FontAwesomeIcon icon={faChessBoard} />
              <span>Round Log Calculator</span>
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
