import React, { useState } from 'react';
import './Chat.scss';
import { Message } from './Message';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [tabs, setTabs] = useState(['Chatbox', 'Notes', 'MJ', '...']);
  const [activeTab, setActiveTab] = useState('Chatbox');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'User', content: input }]);
      setInput('');
    }
  };

  const addTab = () => {
    const newTab = `Tab ${tabs.length + 1}`;
    setTabs([...tabs, newTab]);
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="tabs">
          {tabs.slice(0, 3).map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? 'active' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
          {tabs.length > 3 && (
            <button
              className={activeTab === '...' ? 'active' : ''}
              onClick={() => setActiveTab('...')}
            >
              ...
            </button>
          )}
          <button onClick={addTab}>+</button>
        </div>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            <strong>{msg.sender}: </strong>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="chat-input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
