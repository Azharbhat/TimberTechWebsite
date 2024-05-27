import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './List.css'; // Import your CSS file for styling

export default function List({ data, visitScreen }) {
  return (
    <div className="list-container">
      <h3>
        {data.map(worker => (
          // Wrap list items with Link components
          <h3 className="list-item" key={worker.id}>
            {/* Use Link component to navigate to the next screen */}
            <Link to={`/${visitScreen}`}>
              <strong>{worker.name}</strong> - {worker.position}
            </Link>
          </h3>
        ))}
      </h3>
    </div>
  );
}
