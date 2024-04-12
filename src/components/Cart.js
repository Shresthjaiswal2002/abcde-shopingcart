// Cart.jsx

import React, { useState, useEffect } from 'react';
import './cart.css'

import '../App.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from backend API
    // Update state with fetched cart items
    // Example:
    // fetch('/api/cart')
    //   .then(response => response.json())
    //   .then(data => setCartItems(data));
    // For demonstration purposes, let's assume cart items are already fetched
    const fetchedCartItems = [
      { id: 1, name: 'Item 1', quantity: 2 },
      { id: 2, name: 'Item 2', quantity: 1 },
    ];
    setCartItems(fetchedCartItems);
  }, []);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
