import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube, FaTiktok } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-12">
        <div className="max-w-screen-2xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold text-xl mb-2">Carify</h4>
            <p>Your trusted partner for renting vehicle</p>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-2">Links</h5>
            <ul className="space-y-1">
              <li>Pricing</li>
              <li>Service</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-2">Contact Info</h5>
            <ul className="space-y-1">
              <li>+62 123-4567-8910</li>
              <li>info@carify.com</li>
              <li>Jl. Diponegoro, Surabaya, Indonesia</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-2">Follow Us</h5>
            <div className="flex gap-4 text-white text-xl">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-pink-500 transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-blue-400 transition" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="hover:text-red-500 transition" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="hover:text-gray-300 transition" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-6">
          <p>&copy; 2025 Carify. All rights reserved.</p>
        </div>
      </footer>
  );
};

export default Footer;
