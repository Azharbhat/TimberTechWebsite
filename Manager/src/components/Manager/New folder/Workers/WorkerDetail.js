import React, { useState } from 'react';
import './WorkerDetail.css'; // Import CSS file

const WorkerDetail = () => {
  const [note, setNote] = useState('');
  const [amount, setAmount] = useState('');
  const [entries, setEntries] = useState([]);

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleAdd = () => {
    // Get the current time
    const currentTime = new Date().toLocaleTimeString();

    // Create a new entry object
    const newEntry = {
      note: note,
      amount: amount,
      time: currentTime,
    };

    // Add the new entry to the list of entries
    setEntries([...entries, newEntry]);

    // Reset input fields
    setNote('');
    setAmount('');
  };

  return (
    <div>
    
   
      <h2>Worker Details</h2>
      {/* Flat list */}
      <div className="worker-detail-container">
      <ul>
        {/* Map over entries and display them */}
        {entries.map((entry, index) => (
          <li key={index}>
            <span>{entry.time}: </span>
            <span>{entry.note} - {entry.amount}</span>
          </li>
        ))}
      </ul>
      {/* Input fields for note and amount */}
      <div className='wdc'>
        <input className="input-field" type="text" placeholder="Note" value={note} onChange={handleNoteChange} />
        <input className="input-field" type="number" placeholder="Amount" value={amount} onChange={handleAmountChange} />
        <button className="add-button" onClick={handleAdd}>Add</button>
      </div>
    </div>
    </div>
  );
};

export default WorkerDetail;
