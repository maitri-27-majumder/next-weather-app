import React from 'react';

const Footer=() => {
  return (
    <footer className="bg-gray-100 w-full">
      <div className="border-b border-gray-300">
        <div className="max-w-screen-xl mx-auto px-4 py-3 text-sm text-gray-600">
          <span>India</span>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between text-sm text-gray-600">
        <div className="flex justify-center space-x-4 sm:justify-start">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Advertising</a>
          <a href="#" className="hover:underline">Business</a>
          <a href="#" className="hover:underline">How Search works</a>
        </div>
        <div className="flex justify-center space-x-4 mt-2 sm:mt-0 sm:justify-end">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
