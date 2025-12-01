import React from 'react';

interface ChatBubbleProps {
  message: {
    text: string;
    sender: 'user' | 'bot';
  };
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const bubbleClasses = message.sender === 'user' ? 'bg-blue-500 self-end' : 'bg-gray-700 self-start';

  return (
    <div className={`p-3 rounded-lg max-w-md ${bubbleClasses}`}>
      <p>{message.text}</p>
    </div>
  );
};

export default ChatBubble;