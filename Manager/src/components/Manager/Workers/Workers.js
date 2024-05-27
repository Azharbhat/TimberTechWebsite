import React from 'react';
import './Workers.css'; // Import your CSS file for styling
import List from '../List';

const Workers = () => {
  // Dummy worker data
  const workers = [
    { id: 1, name: 'John Doe', position: 'Manager' },
    { id: 2, name: 'Jane Smith', position: 'Supervisor' },
    { id: 3, name: 'Alice Johnson', position: 'Worker' },
    { id: 4, name: 'Bob Williams', position: 'Worker' },
    // Add more workers as needed
  ];

  // Define visitScreen variable
  const visitScreen = 'WorkerDetial';

  return (
    <div className="worker-list">
      <h2>Worker List</h2>
      {/* Pass visitScreen to List component */}
      <List data={workers} visitScreen={visitScreen} />
    </div>
  );
}

export default Workers;

