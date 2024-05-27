import React from 'react';
import List from '../List'; // Assuming List component is in the same directory as BoxBuyers

export default function BoxBuyers() {
  // Dummy box buyer data
  const boxBuyers = [
    { id: 1, name: 'Alice Brown', company: 'ABC Inc.' },
    { id: 2, name: 'Bob Green', company: 'XYZ Corp.' },
    { id: 3, name: 'Charlie White', company: '123 Enterprises' },
    // Add more box buyers as needed
  ];
  const visitScreen = 'BoxBuyerDetail';
  return (
    <div>
      <h2>Box Buyers</h2>
      <List data={boxBuyers} visitScreen={visitScreen}/>
    </div>
  );
}
