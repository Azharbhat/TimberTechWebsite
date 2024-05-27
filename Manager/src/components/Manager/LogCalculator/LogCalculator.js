import React, { useState, useEffect } from 'react';
import './FlatLogCalculator.css'; // Import your CSS file for styling

export default function FlatLogCalculator() {
  const [inputValue, setInputValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('3.5');
  const [calculationHistory, setCalculationHistory] = useState([]);
  const [result, setResult] = useState('');
  const [total, setTotal] = useState(0);

  const handleCalculate = () => {
    const resultValue = (parseFloat(selectedValue) * parseFloat(inputValue) * parseFloat(inputValue)) / 2304;
    const roundedResult = resultValue.toFixed(2);
    setResult(roundedResult);

    const calculationResult = {
      inputValue: inputValue,
      selectedValue: selectedValue,
      result: roundedResult
    };

    const newHistory = [...calculationHistory, calculationResult];
    setCalculationHistory(newHistory);
    calculateTotal(newHistory);
  };

  const calculateTotal = (history) => {
    const totalResult = history.reduce((acc, calculation) => acc + parseFloat(calculation.result), 0);
    setTotal(totalResult.toFixed(2));
  };

  useEffect(() => {
    calculateTotal(calculationHistory);
  }, [calculationHistory]);

  return (
    <div className="calculator-container">
      <div className="input-container" style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly'}}>
        <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}  style={{width:'20%' ,height:40,borderRadius:5}}>
          <option value="3.5">3.5</option>
          <option value="2.6">2.6</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <input type="number" placeholder="Enter a value" value={inputValue} onChange={(e) => setInputValue(e.target.value)} style={{width:'30%',height:40}}/>
        <button className="calculate-button" style={{width:'30%'}} onClick={handleCalculate}>Calculate</button>
      </div>

      <div className="result-container">
        <p>Total: {total}</p>
      </div>

      <div className="history-container">
        <ul>
          {calculationHistory.map((calculation, index) => (
            <li key={index} style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <p>{calculation.selectedValue}</p>
              <p>{calculation.inputValue}</p>
              <p>{calculation.result}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
