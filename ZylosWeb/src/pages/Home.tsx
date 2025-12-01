import React from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import ChatWindow from '../components/ChatWindow';
import TextInput from '../components/TextInput';
import LogsConsole from '../components/LogsConsole';

const Home: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <TopBar />
        <ChatWindow />
        <TextInput />
        <LogsConsole />
      </div>
    </div>
  );
};

export default Home;