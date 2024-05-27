import React, { useState } from 'react';
import './FlatLogCalculator.css'; // Import your CSS file for styling

export default function FlatLogCalculator() {
  const [lengthFeet, setLengthFeet] = useState('');
  const [breadthInches, setBreadthInches] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [quantity, setQuantity] = useState('');
  const [pricePerUnit, setPricePerUnit] = useState('');
  const [calculationHistory, setCalculationHistory] = useState([]);
  const [result, setResult] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  const handleCalculate = () => {
    const resultValue = (lengthFeet * breadthInches * heightInches * quantity) / 144;
    const totalPriceValue = resultValue * pricePerUnit;
    
    setResult(resultValue.toFixed(2));
    setTotalPrice(totalPriceValue.toFixed(2));

    const calculationResult = {
      lengthFeet: lengthFeet,
      breadthInches: breadthInches,
      heightInches: heightInches,
      quantity: quantity,
      pricePerUnit: pricePerUnit,
      result: resultValue.toFixed(2),
      totalPrice: totalPriceValue.toFixed(2)
    };

    setCalculationHistory([...calculationHistory, calculationResult]);
  };

  return (
    <div className="calculator-container">
      <div className="history-container">
      <div className="result-container">
        <p>Result: {result}</p>
        <p>Total Price: {totalPrice}</p>
      </div>
       
        <ul>
          {calculationHistory.map((calculation, index) => (
            <li key={index}>
              <p>Length: {calculation.lengthFeet} feet, Breadth: {calculation.breadthInches} inches</p>
              <p>Height: {calculation.heightInches} inches, Quantity: {calculation.quantity}</p>
              <p>Result: {calculation.result}, Total Price: {calculation.totalPrice}</p>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="input-container">
        
        <div className="input-row">
          <input type="number" placeholder="Length" value={lengthFeet} onChange={(e) => setLengthFeet(e.target.value)} />
          <input type="number" placeholder="Breadth (inches)" value={breadthInches} onChange={(e) => setBreadthInches(e.target.value)} />
        </div>
        <div className="input-row">
          <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          <input type="number" placeholder="Price Per Unit" value={pricePerUnit} onChange={(e) => setPricePerUnit(e.target.value)} />
        </div>
        <div className="input-row">
        <input type="number" placeholder="Height (inches)" value={heightInches} onChange={(e) => setHeightInches(e.target.value)} />
        <button className="calculate-button" onClick={handleCalculate}>Calculate</button>
        </div>
        
      </div>
      
    </div>
  );
}
