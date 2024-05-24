import React, { useState, useEffect } from 'react';
import './Chat.scss'; // Import des styles CSS

interface Message {
  id: number;
  text: string;
  user: string;
  tab: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('Chatbox');
  const [allTabsVisible, setAllTabsVisible] = useState(false);

  useEffect(() => {
    if (!username) {
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);
        setLoggedIn(true);
      }
    }
  }, [username]);

  const handleLogin = () => {
    if (username.trim() !== '') {
      localStorage.setItem('username', username);
      setLoggedIn(true);
    }
  };

  const handleMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputMessage.trim() !== '') {
      setMessages([
        ...messages,
        { id: Date.now(), text: inputMessage, user: username, tab: activeTab },
      ]);
      setInputMessage('');
    }
  };

  const filteredMessages = messages.filter(
    (message) => message.tab === activeTab
  );

  const tabs: string[] = ['Chatbox', 'Notes', 'MJ']; // Ajoutez vos onglets supplémentaires ici
  if (!allTabsVisible && tabs.length > 3) {
    tabs.splice(3, 0, '...');
  }

  if (!loggedIn) {
    return (
      <div className="login-form">
        <h3>Connectez-vous</h3>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nom d'utilisateur"
        />
        <button onClick={handleLogin}>Se connecter</button>
      </div>
    );
  }

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h3>Chat en direct</h3>
        <span>Connecté en tant que: {username}</span>
        <div className="tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={activeTab === tab ? 'active' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab === '...' ? tab : tab}
            </button>
          ))}
          {tabs.length > 3 && !allTabsVisible && (
            <button onClick={() => setAllTabsVisible(true)}>...</button>
          )}
          {allTabsVisible && (
            <button onClick={() => setAllTabsVisible(false)}>Close</button>
          )}
          <button onClick={() => console.log('Add new tab')}>+</button>
        </div>
      </div>
      <div className="chat-messages">
        {filteredMessages.map((message) => (
          <div key={message.id} className="message">
            <span className="message-user">{message.user}: </span>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit} className="chat-input-form">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
