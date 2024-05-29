import { useState } from 'react';
import './Chat.scss';
import { v4 as uuidv4 } from 'uuid';
import { Dropdown, DropdownProps, Modal, Button } from 'semantic-ui-react';

interface Message {
  sender: string;
  content: string;
}

function Chat() {
  const [messages, setMessages] = useState<{ [key: string]: Message[] }>({
    Chatbox: [],
    Notes: [],
    MJ: [],
    '...': [],
  });
  const [input, setInput] = useState('');
  const [tabs, setTabs] = useState(['Chatbox', 'Notes', 'MJ', '...']);
  const [activeTab, setActiveTab] = useState('Chatbox');
  const [modalOpen, setModalOpen] = useState(false);
  const [newTabType, setNewTabType] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages({
        ...messages,
        [activeTab]: [
          ...messages[activeTab],
          { sender: 'User', content: input },
        ],
      });
      setInput('');
    }
  };

  const addTab = () => {
    setModalOpen(true);
  };

  const handleTabTypeChange = (
    e: React.SyntheticEvent<HTMLElement>,
    { value }: DropdownProps
  ) => {
    setNewTabType(value as string);
  };

  const handleAddTab = () => {
    if (newTabType) {
      const newTabName = `${newTabType} ${
        tabs.filter((tab) => tab.startsWith(newTabType)).length + 1
      }`;
      setTabs([...tabs, newTabName]);
      setMessages({ ...messages, [newTabName]: [] });
      setActiveTab(newTabName);
      setModalOpen(false);
      setNewTabType('');
    }
  };

  const tabTypes = [
    { key: 'Chatbox', text: 'Chatbox', value: 'Chatbox' },
    { key: 'Notes', text: 'Notes', value: 'Notes' },
    { key: 'MJ', text: 'MJ', value: 'MJ' },
    { key: '...', text: '...', value: '...' },
  ];

  return (
    <div className="chat-window">
      <div className="chat-header">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
        <button type="button" onClick={addTab}>
          + Add Tab
        </button>
      </div>
      <div className="chat-messages">
        {activeTab === 'Notes' ? (
          <textarea
            className="notes-textarea"
            placeholder="Write your notes here..."
          />
        ) : (
          messages[activeTab].map((msg) => (
            <div key={uuidv4()} className="chat-message">
              <strong>{msg.sender}: </strong>
              {msg.content}
            </div>
          ))
        )}
      </div>
      <div className="chat-input-form">
        {activeTab !== 'Notes' && (
          <>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ecrivez votre message ici!"
            />
            <button type="button" onClick={sendMessage}>
              Envoyer
            </button>
          </>
        )}
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Header>Quel onglet souhaitez-vous ajouter?</Modal.Header>
        <Modal.Content>
          <Dropdown
            placeholder="Selectionner l'onglet à ajouter"
            selection
            options={tabTypes}
            onChange={handleTabTypeChange}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={handleAddTab}>Ajouter l&apos;onglet</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default Chat;
