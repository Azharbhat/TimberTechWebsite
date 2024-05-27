import React, { useState } from 'react';
import '../List.css';
import './BoxMakerDetail.css';

export default function BoxMakersDetail() {
  const [notes, setNotes] = useState([]);
  const [boxOption, setBoxOption] = useState('');
  const [amount, setAmount] = useState('');

  const addNote = () => {
    if (!boxOption || !amount) return;
    const newNote = {
      id: Math.random().toString(),
      note: boxOption,
      amount: parseFloat(amount)
    };
    setNotes(prevNotes => [...prevNotes, newNote]);
    setBoxOption('');
    setAmount('');
  };

  const calculateTotals = () => {
    let totalFullBox = 0;
    let totalHalfBox = 0;
    let totalOneSide = 0;

    notes.forEach(note => {
      if (note.note === 'Full box') {
        totalFullBox += note.amount;
      } else if (note.note === 'Half box') {
        totalHalfBox += note.amount;
      } else if (note.note === 'One side') {
        totalOneSide += note.amount;
      }
    });

    return {
      totalFullBox,
      totalHalfBox,
      totalOneSide,
      totalBoxes: totalFullBox + totalHalfBox + totalOneSide
    };
  };

  const totals = calculateTotals();

  return (
    <div className="box-makers-detail">
      <div className="totals">
        <div>Total Full Boxes: {totals.totalFullBox}</div>
        <div>Total Half Boxes: {totals.totalHalfBox}</div>
        <div>Total One Sides: {totals.totalOneSide}</div>
        <div>Total Boxes: {totals.totalBoxes}</div>
      </div>
      <div className="list-container">
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
          <ul className="list">
            {notes.map(note => (
              <li key={note.id} className="list-item">
                <strong>{note.note}</strong> - {note.amount}
              </li>
            ))}
          </ul>
          <div className="input-section">
            <div className="radio-buttons">
              <label>
                <input
                  type="radio"
                  value="Full box"
                  checked={boxOption === 'Full box'}
                  onChange={(e) => setBoxOption(e.target.value)}
                />
                Full box
              </label>
              <label>
                <input
                  type="radio"
                  value="Half box"
                  checked={boxOption === 'Half box'}
                  onChange={(e) => setBoxOption(e.target.value)}
                />
                Half box
              </label>
              <label>
                <input
                  type="radio"
                  value="One side"
                  checked={boxOption === 'One side'}
                  onChange={(e) => setBoxOption(e.target.value)}
                />
                One side
              </label>
            </div>
            <div className="radio-buttons">
            <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={addNote}>Add</button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
