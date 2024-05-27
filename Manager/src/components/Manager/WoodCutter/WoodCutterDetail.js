import React, { useState } from 'react';
import '../List.css';

export default function WoodCutterDetail() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [amount, setAmount] = useState('');

  const addNote = () => {
    if (!noteText || !amount) return;
    const newNote = {
      id: Math.random().toString(),
      note: noteText,
      amount: amount
    };
    setNotes(prevNotes => [...prevNotes, newNote]);
    setNoteText('');
    setAmount('');
  };

  return (
    <div className='list-container'>
    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
    <ul>
    {notes.map(note => (
      <li key={note.id} >
        <strong>{note.note}</strong> - {note.amount}
      </li>
    ))}
  </ul>
  <div >
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
  );
}
