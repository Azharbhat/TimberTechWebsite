import React, { useState } from 'react';
import './BoxBuyers.css';

const BoxBuyers = () => {
  const [filter, setFilter] = useState('All');
  const [transactions, setTransactions] = useState([]);
  const [newTransactionType, setNewTransactionType] = useState('Full');
  const [newTransactionAmount, setNewTransactionAmount] = useState('');

  const addTransaction = () => {
    if (newTransactionAmount.trim() === '' || isNaN(newTransactionAmount)) {
      alert('Please enter a valid amount');
      return;
    }

    const newTransaction = {
      type: newTransactionType.toLowerCase(),
      date: new Date().toLocaleString(),
      amount: parseFloat(newTransactionAmount)
    };
    setTransactions([...transactions, newTransaction]);
    setNewTransactionAmount('');
  };

  const filteredTransactions = filter === 'All' ? transactions : transactions.filter(t => t.type === filter.toLowerCase());

  const calculateTotals = () => {
    let totalFull = 0;
    let totalHalf = 0;
    let totalPaid = 0;
    let totalBalance = 0;

    transactions.forEach(transaction => {
      if (transaction.type === 'full') {
        totalFull += transaction.amount;
      } else if (transaction.type === 'half') {
        totalHalf += transaction.amount;
      } else if (transaction.type === 'payment') {
        totalPaid += transaction.amount;
      }
    });

    totalBalance = (totalFull + totalHalf) - totalPaid;

    return {
      totalFull,
      totalHalf,
      totalPaid,
      totalBalance
    };
  };

  const totals = calculateTotals();

  return (
    <div className="transactions-app">
      <div className="header">
        <div className="header-info">
          <div>shabirr</div>
          <div>Full Box: {totals.totalFull}</div>
          <div>Half Box: {totals.totalHalf}</div>
          <div>Total Rs: {totals.totalFull + totals.totalHalf}</div>
          <div>Paid: {totals.totalPaid}</div>
          <div>Balance: {totals.totalBalance}</div>
        </div>
      
      </div>
      <div className="filter">
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Payment">Payment</option>
        <option value="Half">Half</option>
        <option value="Full">Full</option>
      </select>
    </div>
      <div className="transactions-list">
        {filteredTransactions.map((transaction, index) => (
          <div key={index} className={`transaction ${transaction.type}`}>
            <div>{transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}</div>
            <div>{transaction.date}</div>
            <div>{transaction.amount}</div>
          </div>
        ))}
      </div>
      <div className="add-data">
        <select value={newTransactionType} onChange={(e) => setNewTransactionType(e.target.value)}>
          <option value="Full">Full</option>
          <option value="Half">Half</option>
          <option value="Payment">Payment</option>
        </select>
        <input 
          type="text" 
          placeholder="Amount" 
          value={newTransactionAmount} 
          onChange={(e) => setNewTransactionAmount(e.target.value)} 
        />
        <button onClick={addTransaction}>Add Data</button>
      </div>
    </div>
  );
};

export default BoxBuyers;
