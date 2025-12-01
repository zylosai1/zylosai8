import React from 'react';
import { useSettingsStore } from '../store/settingsStore';

const TopBar: React.FC = () => {
  const { wsConnected, ttsEnabled, toggleTts } = useSettingsStore();

  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
      <div className="flex items-center">
        <div className={`w-3 h-3 rounded-full mr-2 ${wsConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <p>{wsConnected ? 'Connected' : 'Disconnected'}</p>
      </div>
      <button onClick={toggleTts} className={`px-3 py-1 rounded-md ${ttsEnabled ? 'bg-blue-500' : 'bg-gray-600'}`}>
        {ttsEnabled ? 'TTS Enabled' : 'TTS Disabled'}
      </button>
    </div>
  );
};

export default TopBar;