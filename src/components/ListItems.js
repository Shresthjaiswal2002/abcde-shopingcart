// ListItems.jsx

import React, { useState, useEffect } from 'react';
import './Listitem.css'
import '../App.css';

const ListItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from backend API
    // Update state with fetched items
    // Example:
    // fetch('/api/items')
    //   .then(response => response.json())
    //   .then(data => setItems(data));
    // For demonstration purposes, let's assume items are already fetched
    const fetchedItems = [
      { id: 1, name: 'Item 1', price: 10 },
      { id: 2, name: 'Item 2', price: 20 },
      { id: 3, name: 'Item 3', price: 30 },
    ];
    setItems(fetchedItems);
  }, []);

  const handleAddToCart = (item) => {
    // Logic to add item to the cart
    alert(`Added ${item.name} to cart`);
  };

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
