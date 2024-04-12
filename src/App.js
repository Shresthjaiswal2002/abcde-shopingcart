// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import ListItems from './components/ListItems';
import Cart from './components/Cart';
import OrderHistory from './components/OrderHistory';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation bar */}
        <nav>
          <ul>
            <li>
              <Link to="/">User Login</Link>
            </li>
            <li>
              <Link to="/items">Items</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/orders">Order History</Link>
            </li>
          </ul>
        </nav>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/items" element={<ListItems />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<OrderHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
