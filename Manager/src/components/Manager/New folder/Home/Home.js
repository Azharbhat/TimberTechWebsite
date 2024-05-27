import React, { useState } from 'react';
import WorkersComponent from '../Workers/Worker';
import WorkerDetail from '../Workers/WorkerDetail';
import BoxBuyersComponent from '../BoxBuyers/BoxBuyers';
import BoxMakers from '../BoxMakers/BoxMakers';
import FlatLogCalculator from '../Calculator/FlatLogCalculator';
import RoundLogCalculator from '../Calculator/RoundLogCalculator';
import Transporter from '../Transporter/Transporter';
import WoodCutter from '../WoodCutter/WoodCutter';
import Attendance from '../Attandance/Attandance'
import './Home.css';

const HomeScreen = () => {
  const [selectedOption, setSelectedOption] = useState('Workers');
  const [selectedWorker, setSelectedWorker] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setSelectedWorker(null); // Reset selectedWorker when switching options
  };

  const handleWorkerSelect = (worker) => {
    setSelectedWorker(worker);
  };

  return (
    <div className="container">
      {/* Navbar */}
      <div className="navbar">
        <div className="brand">Mill Name</div>
        {/* Navbar options */}
        <div className="navbar-options">
          <div className={selectedOption === 'Workers' ? 'nav-item selected' : 'nav-item'} onClick={() => handleOptionSelect('Workers')}>Workers</div>
          <div className={selectedOption === 'BoxMakers' ? 'nav-item selected' : 'nav-item'} onClick={() => handleOptionSelect('BoxMakers')}>Box Makers</div>
          <div className={selectedOption === 'BoxBuyers' ? 'nav-item selected' : 'nav-item'} onClick={() => handleOptionSelect('BoxBuyers')}>Box Buyers</div>
          <div className={selectedOption === 'Transporters' ? 'nav-item selected' : 'nav-item'} onClick={() => handleOptionSelect('Transporters')}>Transporters</div>
          <div className={selectedOption === 'WoodCutter' ? 'nav-item selected' : 'nav-item'} onClick={() => handleOptionSelect('WoodCutter')}>Wood Cutter</div>
          <div className={selectedOption === 'FlatLogCalculator' ? 'nav-item selected' : 'nav-item'} onClick={() => handleOptionSelect('FlatLogCalculator')}>Flat Log Calculator</div>
          <div className={selectedOption === 'RoundLogCalculator' ? 'nav-item selected' : 'nav-item'} onClick={() => handleOptionSelect('RoundLogCalculator')}>Round Log Calculator</div>
          <div className={selectedOption === 'Attendance' ? 'nav-item selected' : 'nav-item'} onClick={() => handleOptionSelect('Attendance')}>Attendance</div>
          {/* Add other Navbar options here */}
        </div>
      </div>
      <div className="content">
        {/* Sidebar */}
        <div className="sidebar">
          {/* Render WorkersComponent if Workers is selected */}
          {selectedOption === 'Workers' && <WorkersComponent onWorkerSelect={handleWorkerSelect} />}
          {/* Render BoxBuyersComponent if Box Buyers is selected */}
          {selectedOption === 'BoxBuyers' && <BoxBuyersComponent />}
          {/* Render BoxMakers component if BoxMakers is selected */}
          {selectedOption === 'BoxMakers' && <BoxMakers />}
          {/* Render Transporter component if Transporters is selected */}
          {selectedOption === 'Transporters' && <Transporter />}
          {/* Render WoodCutter component if WoodCutter is selected */}
          {selectedOption === 'WoodCutter' && <WoodCutter />}
          {/* Render FlatLogCalculator component if FlatLogCalculator is selected */}
          {selectedOption === 'FlatLogCalculator' && <FlatLogCalculator />}
          {/* Render RoundLogCalculator component if RoundLogCalculator is selected */}
          {selectedOption === 'RoundLogCalculator' && <RoundLogCalculator />}
          {/* Render Attendance component if Attendance is selected */}
          {selectedOption === 'Attendance' && <Attendance />}
          {/* Add other Sidebar components here */}
        </div>
        {/* Main content */}
        <div className="main">
          {/* Render WorkerDetail component if a worker is selected */}
          {selectedWorker && <WorkerDetail worker={selectedWorker} />}
        </div>
        {/* Right sidebar */}
        {/* You can add content for the right sidebar here */}
      </div>
    </div>
  );
};

export default HomeScreen;
