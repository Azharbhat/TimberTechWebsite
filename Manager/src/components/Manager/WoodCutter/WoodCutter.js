import React, { useState } from 'react';
import './WoodCutter.css';

const WoodCutter = () => {
  const [data, setData] = useState({
    totalEarned: 4675,
    paid: 200,
    balance: 4475,
    records: [
      {
        date: '2024-04-18',
        pricePerFeet: 55,
        totalPrice: 4675,
        payment: 200,
        place: 'akakka',
        feetCut: 85,
      },
    ],
  });

  const [form, setForm] = useState({
    date: '',
    place: '',
    feetCut: '',
    pricePerFeet: '',
    payment: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      ...form,
      feetCut: parseInt(form.feetCut),
      pricePerFeet: parseInt(form.pricePerFeet),
      payment: parseInt(form.payment),
      totalPrice: parseInt(form.feetCut) * parseInt(form.pricePerFeet),
    };

    const newTotalEarned = data.totalEarned + newRecord.totalPrice;
    const newPaid = data.paid + newRecord.payment;
    const newBalance = newTotalEarned - newPaid;

    setData({
      totalEarned: newTotalEarned,
      paid: newPaid,
      balance: newBalance,
      records: [...data.records, newRecord],
    });

    setForm({
      date: '',
      place: '',
      feetCut: '',
      pricePerFeet: '',
      payment: '',
    });
  };

  return (
    <div className="wood-cutter-container">
      <div className="header">
        <h3>Aasif</h3>
        <div className="totals">
          <span>Total Earned: {data.totalEarned}</span>
          <span> Paid: {data.paid}</span>
          <span> Balance: {data.balance}</span>
        </div>
      </div>
      <div className="records">
        {data.records.map((record, index) => (
          <div key={index} className="record">
            <div className="info-row">
              <div>Date: {record.date}</div>
              <div>Place: {record.place}</div>
            </div>
            <div className="info-row">
              <div>Price Per Feet: {record.pricePerFeet}</div>
              <div>Feet Cut: {record.feetCut}</div>
            </div>
            <div className="info-row">
              <div>Total Price: {record.totalPrice}</div>
              <div>Payment: {record.payment}</div>
            </div>
          </div>
        ))}
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="text"
          name="place"
          placeholder="Place"
          value={form.place}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="number"
          name="feetCut"
          placeholder="No of feet cut"
          value={form.feetCut}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="number"
          name="pricePerFeet"
          placeholder="Price Per Feet"
          value={form.pricePerFeet}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="number"
          name="payment"
          placeholder="Payment"
          value={form.payment}
          onChange={handleChange}
          required
          className="input"
        />
        <button type="submit" className="button">Add Data</button>
      </form>
    </div>
  );
};

export default WoodCutter;
