import React, { useState } from 'react';
import './TransporterDetail.css';

const TransporterDetail = () => {
  const [data, setData] = useState({
    balance: 1000,
    totalFairCosts: 1500,
    totalPaidFair: 500,
    deliveries: []
  });

  const [newDelivery, setNewDelivery] = useState({
    type: '',
    destination: '',
    to: '',
    from: '',
    fullQuantity: '',
    halfQuantity: '',
    fair: '',
    paidFair: '',
    date: '',
    time: '',
    quantity: ''
  });

  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDelivery((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddData = () => {
    setData((prev) => ({
      ...prev,
      deliveries: [...prev.deliveries, newDelivery]
    }));
    setNewDelivery({
      type: '',
      destination: '',
      to: '',
      from: '',
      fullQuantity: '',
      halfQuantity: '',
      fair: '',
      paidFair: '',
      date: '',
      time: '',
      quantity: ''
    });
  };

  const renderBoxDeliveryFields = () => {
    return (
      <div>
        <label htmlFor="quantity">Select Quantity:</label>
        <select name="quantity" value={newDelivery.quantity} onChange={(e) => handleQuantityChange(e.target.value)}>
          <option value="full">Full</option>
          <option value="half">Half</option>
          <option value="both">Both</option>
        </select>
        {newDelivery.quantity === 'full' && (
          <input type="number" name="fullQuantity" value={newDelivery.fullQuantity} onChange={handleChange} placeholder="Full Quantity" />
        )}
        {newDelivery.quantity === 'half' && (
          <input type="number" name="halfQuantity" value={newDelivery.halfQuantity} onChange={handleChange} placeholder="Half Quantity" />
        )}
        {newDelivery.quantity === 'both' && (
          <div>
            <input type="number" name="fullQuantity" value={newDelivery.fullQuantity} onChange={handleChange} placeholder="Full Quantity" />
            <input type="number" name="halfQuantity" value={newDelivery.halfQuantity} onChange={handleChange} placeholder="Half Quantity" />
          </div>
        )}
        <input type="text" name="destination" value={newDelivery.destination} onChange={handleChange} placeholder="Destination" />
        <input type="text" name="to" value={newDelivery.to} onChange={handleChange} placeholder="To" />
      </div>
    );
  };

  const renderLogDeliveryFields = () => {
    return (
      <div>
        <input type="text" name="from" value={newDelivery.from} onChange={handleChange} placeholder="From" />
        <input type="text" name="to" value={newDelivery.to} onChange={handleChange} placeholder="To" />
      </div>
    );
  };

  const handleTypeChange = (type) => {
    setNewDelivery((prev) => ({ ...prev, type }));
    setIsVisible(true);
  };

  const handleQuantityChange = (quantity) => {
    setNewDelivery((prev) => ({ ...prev, quantity }));
  };

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="delivery-app">
      <div className="header">
        <div>Tariq</div>
        <div>Balance: {data.balance}</div>
        <div>Total Fair Costs: {data.totalFairCosts}</div>
        <div>Total Paid Fair: {data.totalPaidFair}</div>
      </div>
      <button onClick={toggleVisibility}>{isVisible ? 'Hide' : 'Show'} Fields</button>
      <div className="delivery-list">
        <h3>Deliveries:</h3>
        {data.deliveries.length === 0 ? (
          <p>No deliveries added yet.</p>
        ) : (
          <ul>
            {data.deliveries.map((delivery, index) => (
              <li key={index}>
                <strong>Type:</strong> {delivery.type}, <strong>Destination:</strong> {delivery.destination}, <strong>To:</strong> {delivery.to}, <strong>From:</strong> {delivery.from}, <strong>Full Quantity:</strong> {delivery.fullQuantity}, <strong>Half Quantity:</strong> {delivery.halfQuantity}, <strong>Fair:</strong> {delivery.fair}, <strong>Paid Fair:</strong> {delivery.paidFair}, <strong>Date:</strong> {delivery.date}, <strong>Time:</strong> {delivery.time}
              </li>
            ))}
          </ul>
        )}
      </div>
      {isVisible && (
        <div className="add-data-form">
          <div className="button-group">
            <button onClick={() => handleTypeChange('boxDelivery')}>Box Delivery</button>
            <button onClick={() => handleTypeChange('logDelivery')}>Log Delivery</button>
          </div>
          {newDelivery.type === 'boxDelivery' && renderBoxDeliveryFields()}
          {newDelivery.type === 'logDelivery' && renderLogDeliveryFields()}
          <input type="number" name="fair" value={newDelivery.fair} onChange={handleChange} placeholder="Fair" />
          <input type="number" name="paidFair" value={newDelivery.paidFair} onChange={handleChange} placeholder="Paid Fair" />
          <button onClick={handleAddData}>Add Data</button>
        </div>
      )}
      
    </div>
  );
};

export default TransporterDetail;
