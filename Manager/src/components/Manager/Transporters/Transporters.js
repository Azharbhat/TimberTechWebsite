import React from 'react';
import List from '../List'; // Assuming List component is in the same directory as Transporters

const Transporters = () => {
  // Dummy transporter data
  const visitScreen = 'TransporterDetail';
  const transporters = [
    { id: 1, name: 'Sam Trucking', company: 'Sam Transport Co.' },
    { id: 2, name: 'Emily Logistics', company: 'Emily Transport Services' },
    { id: 3, name: 'Tom Express', company: 'Tom\'s Transport' },
    // Add more transporters as needed
  ];

  return (
    <div>
      <h2>Transporters</h2>
      <List data={transporters} visitScreen={visitScreen} />
    </div>
  );
}

export default Transporters;
