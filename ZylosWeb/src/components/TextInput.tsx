import React, { useState } from 'react';
import { useChatStore } from '../store/chatStore';

const TextInput: React.FC = () => {
  const [text, setText] = useState('');
  const { sendMessage } = useChatStore();

  const handleSend = () => {
    if (text.trim()) {
      sendMessage(text);
      setText('');
    }
  };

  return (
    <div className="p-4 bg-gray-800">
      <div className="flex items-center">
        <input
          type="text"
          className="flex-1 p-2 bg-gray-700 rounded-l-md focus:outline-none"
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} className="px-4 py-2 bg-blue-500 rounded-r-md">
          Send
        </button>
      </div>
    </div>
  );
};

export default TextInput;