import React, { useRef, useEffect } from 'react';
import { useChatStore } from '../store/chatStore';
import ChatBubble from './ChatBubble';

const ChatWindow: React.FC = () => {
  const { messages, isTyping } = useChatStore();
  const endOfMessagesRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 p-4 overflow-y-auto">
      <div className="flex flex-col space-y-2">
        {messages.map((msg, index) => (
          <ChatBubble key={index} message={msg} />
        ))}
        {isTyping && <p className='italic'>Zylos is typing...</p>}
        <div ref={endOfMessagesRef} />
      </div>
    </div>
  );
};

export default ChatWindow;