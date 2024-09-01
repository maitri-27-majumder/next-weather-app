import React from 'react';
import { FiGrid } from 'react-icons/fi';

const Header= () => {
  return (
    <header className="flex justify-end items-center p-4">
      <div className="flex space-x-4">
        <a href="#" className="text-sm text-gray-500 hover:underline">Gmail</a>
        <a href="#" className="text-sm text-gray-500 hover:underline">Images</a>
      </div>
      <div className="flex items-center space-x-3">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <FiGrid className="text-gray-500" size={20} />
        </button>
        <img
          src="/avatar.png"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
