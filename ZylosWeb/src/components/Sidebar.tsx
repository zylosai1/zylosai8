import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 p-4">
      <h1 className="text-2xl font-bold mb-4">Zylos</h1>
      <nav>
        <ul>
          <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
          <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Settings</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;