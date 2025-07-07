import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-12">
        <div className="max-w-screen-2xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold text-xl mb-2">AutoDeal</h4>
            <p>Your trusted partner in finding the perfect vehicle</p>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-2">Quick Links</h5>
            <ul className="space-y-1">
              <li>Inventory</li>
              <li>Financing</li>
              <li>Trade-In</li>
              <li>Service</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-2">Contact Info</h5>
            <ul className="space-y-1">
              <li>(555) 123-4567</li>
              <li>info@autodeal.com</li>
              <li>123 Auto Street, City, ST 12345</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-2">Follow Us</h5>
            <div className="flex gap-4">
              <div className="w-6 h-6 bg-gray-400 rounded" />
              <div className="w-6 h-6 bg-gray-400 rounded" />
              <div className="w-6 h-6 bg-gray-400 rounded" />
              <div className="w-6 h-6 bg-gray-400 rounded" />
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-6">
          <p>&copy; 2025 CarDealer. All rights reserved.</p>
        </div>
      </footer>
  );
};

export default Footer;
