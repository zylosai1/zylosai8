import React from 'react';

interface MessageBubbleProps {
  text: string;
  sender: 'user' | 'ai';
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ text, sender }) => {
  const bubbleClass = sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-700 text-white self-start';
  return <div className={`rounded-lg p-2 max-w-xs ${bubbleClass}`}>{text}</div>;
};

export default MessageBubble;