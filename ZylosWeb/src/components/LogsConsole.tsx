import React from 'react';

const LogsConsole: React.FC = () => {
  return (
    <div className="h-32 bg-gray-800 p-4 overflow-y-auto">
      <p className="text-sm text-gray-400">[INFO] Application logs will be displayed here.</p>
    </div>
  );
};

export default LogsConsole;