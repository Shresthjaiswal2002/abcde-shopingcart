// OrderHistory.jsx

import React, { useState, useEffect } from 'react';
import './orderhistory.css'
import '../App.css';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch order history from backend API
    // Update state with fetched orders
    // Example:
    // fetch('/api/orders')
    //   .then(response => response.json())
    //   .then(data => setOrders(data));
    // For demonstration purposes, let's assume order history is already fetched
    const fetchedOrders = [1, 2, 3]; // Order IDs
    setOrders(fetchedOrders);
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orders.map((orderId) => (
          <li key={orderId}>Order ID: {orderId}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
