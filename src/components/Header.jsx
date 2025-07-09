import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Carify</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/products" className="hover:text-blue-500">Products</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4">
          <ul className="flex flex-col space-y-3 text-sm font-medium">
            <li><Link to="/" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/products" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Products</Link></li>
            <li><Link to="/about" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>About</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
