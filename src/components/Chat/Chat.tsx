import { useState } from 'react';
import './Chat.scss';
import { v4 as uuidv4 } from 'uuid';

interface Message {
  sender: string;
  content: string;
}

function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [tabs, setTabs] = useState(['Chatbox']);
  const [activeTab, setActiveTab] = useState('Chatbox');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'User', content: input }]);
      setInput('');
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <button
          type="button"
          key={tabs.join('')}
          className={tabs.includes(activeTab) ? 'active' : ''}
          onClick={() => setActiveTab(tabs[0])}
        >
          {tabs}
        </button>
      </div>
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={uuidv4()} className="chat-message">
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
        <button type="button" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
