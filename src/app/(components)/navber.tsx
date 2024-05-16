'use client'
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-purple-800">
      <div className="container mx-auto px-1 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-12">
          <img src='/logo.png' alt="Logo" className="h-10 w-10" />
          <div className="flex space-x-6">
            <a href="#" className="text-white text-md font-semibold hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white text-md font-semibold hover:text-gray-300">
              Products
            </a>
            <a href="#" className="text-white text-md font-semibold hover:text-gray-300">
              Cart
            </a>
          </div>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" color='white' width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
