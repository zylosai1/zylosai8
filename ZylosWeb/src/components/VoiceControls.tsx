import React, { useState } from 'react';

const VoiceControls: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isDeafened, setIsDeafened] = useState(false);

  return (
    <div className="flex items-center justify-center p-4 bg-gray-800">
      <button onClick={() => setIsMuted(!isMuted)} className={`px-4 py-2 rounded-md mr-4 ${isMuted ? 'bg-red-500' : 'bg-gray-600'}`}>
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
      <button onClick={() => setIsDeafened(!isDeafened)} className={`px-4 py-2 rounded-md ${isDeafened ? 'bg-red-500' : 'bg-gray-600'}`}>
        {isDeafened ? 'Undeafen' : 'Deafen'}
      </button>
    </div>
  );
};

export default VoiceControls;