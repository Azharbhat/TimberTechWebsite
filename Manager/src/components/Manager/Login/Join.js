import React, { useState } from 'react';
import './Join.css'; // Import CSS file

export default function Join() {
  const [selectedRole, setSelectedRole] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleJoin = () => {
    // Handle joining based on selectedRole and inputValue
    alert(`Joining as ${selectedRole} with input: ${inputValue}`);
    // Your logic here
  };

  return (
    <div className="join-container">
      <div className="role-buttons">
        <button className={selectedRole === 'worker' ? 'selected' : ''} onClick={() => handleRoleSelection('worker')}>Worker</button>
        <button className={selectedRole === 'boxMaker' ? 'selected' : ''} onClick={() => handleRoleSelection('boxMaker')}>Box Maker</button>
        <button className={selectedRole === 'customer' ? 'selected' : ''} onClick={() => handleRoleSelection('customer')}>Customer</button>
      </div>
      <input className="join-input" type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter your id" />
      <button className="join-button" onClick={handleJoin}>Join</button>
    </div>
  );
}
