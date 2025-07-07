import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Carify</h1>
        <ul className="flex space-x-6 text-sm font-medium">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/products" className="hover:text-blue-500">Products</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
