import React from 'react';
import './Worker.css'; // Import CSS file

const WorkersComponent = ({ onWorkerSelect }) => {
  // Dummy worker data for demonstration
  const workers = [
    { id: 1, name: "John Doe", age: 30, position: "Manager" },
    { id: 2, name: "Jane Smith", age: 25, position: "Assistant" },
    { id: 3, name: "Mike Johnson", age: 35, position: "Supervisor" }
  ];

  // Function to handle worker selection
  const handleWorkerSelect = (worker) => {
    // Pass the selected worker to the parent component
    onWorkerSelect(worker);
  };

  return (
    <div className="workers-container">
      <h1>Workers</h1>
      {/* Display list of workers */}
      <ul>
        {workers.map(worker => (
          <li key={worker.id} onClick={() => handleWorkerSelect(worker)}>
            {worker.name}
          </li>
        ))}
      </ul>
      {/* Button to add a worker */}
      <div className="add-worker-button">
        <button>Add Worker</button>
      </div>
    </div>
  );
};

export default WorkersComponent;
