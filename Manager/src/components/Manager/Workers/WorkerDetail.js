import React, { useState } from 'react';
import '../List.css';
import './Workers.css';

export default function WorkerDetail() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [amount, setAmount] = useState('');
  const [totalPaid, setTotalPaid] = useState(0);
  const [balance, setBalance] = useState(0);

  const addNote = () => {
    if (!noteText || !amount || isNaN(amount)) return;
    const newNote = {
      id: Math.random().toString(),
      note: noteText,
      amount: parseFloat(amount),
      date: new Date().toLocaleDateString()
    };
    setNotes(prevNotes => {
      const updatedNotes = [...prevNotes, newNote];
      updateTotals(updatedNotes);
      return updatedNotes;
    });
    setNoteText('');
    setAmount('');
  };

  const handleLongPress = (id) => {
    setNotes(prevNotes => {
      const updatedNotes = prevNotes.filter(note => note.id !== id);
      updateTotals(updatedNotes);
      return updatedNotes;
    });
  };

  const updateTotals = (notes) => {
    const totalPaid = notes.reduce((sum, note) => sum + note.amount, 0);
    const balance = calculateBalance(totalPaid);
    setTotalPaid(totalPaid);
    setBalance(balance);
  };

  const calculateBalance = (totalPaid) => {
    const totalAmount = 1000; // Example total amount due
    return totalAmount - totalPaid;
  };

  return (
    <div>
      <h3>Name</h3>
      <div className="summary">
        <p><strong>Total Paid:</strong> {totalPaid}</p>
        <p><strong>Balance:</strong> {balance}</p>
      </div>
      <div className='list-container'>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
          <div>
            {notes.map(note => (
              <p key={note.id} className="list-item" onContextMenu={(e) => { e.preventDefault(); handleLongPress(note.id); }}>
                <strong>{note.note}</strong> - {note.amount} - {note.date}<br />
              </p>
            ))}
          </div>
          <div>
            <input
              type="text"
              placeholder="Note"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            />
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
  );
}
