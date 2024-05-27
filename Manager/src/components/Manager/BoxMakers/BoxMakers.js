import React from 'react';
import List from '../List'; // Assuming List component is in the same directory as BoxMakers

export default function BoxMakers() {
  // Dummy box maker data
  const boxMakers = [
    { id: 1, name: 'John Red', company: 'Red Boxes Co.' },
    { id: 2, name: 'Emily Blue', company: 'Blue Manufacturing' },
    { id: 3, name: 'Michael Yellow', company: 'Yellow Industries' },
    // Add more box makers as needed
  ];
  const visitScreen = 'BoxMakerDetail';
  return (
    <div>
      <h2>Box Makers</h2>
      <List data={boxMakers} visitScreen={visitScreen}/>
    </div>
  );
}
