import React, { useState } from 'react';

const FlatLogCalculator = () => {
  // State variables to hold input values and result
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [thickness, setThickness] = useState('');
  const [result, setResult] = useState(null);

  // Function to handle calculation
  const calculateVolume = () => {
    // Convert input values to numbers
    const len = parseFloat(length);
    const wid = parseFloat(width);
    const thick = parseFloat(thickness);

    // Check if any input is invalid
    if (isNaN(len) || isNaN(wid) || isNaN(thick)) {
      setResult('Please enter valid numbers for length, width, and thickness.');
      return;
    }

    // Calculate volume
    const volume = len * wid * thick;

    // Set the result
    setResult(`The volume of the flat log is ${volume} cubic units.`);
  };

  return (
    <div>
      <h2>Flat Log Calculator</h2>
      <div>
        <label htmlFor="length">Length:</label>
        <input
          type="number"
          id="length"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          type="number"
          id="width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="thickness">Thickness:</label>
        <input
          type="number"
          id="thickness"
          value={thickness}
          onChange={(e) => setThickness(e.target.value)}
        />
      </div>
      <button onClick={calculateVolume}>Calculate Volume</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default FlatLogCalculator;
