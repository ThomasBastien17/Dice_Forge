import React, { useState } from 'react';
import {
  Dropdown,
  Button,
  Input,
  Icon,
  Image,
  Container,
} from 'semantic-ui-react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../CreateSheet/CreateSheet.scss';

function CreateSheet() {
  const [licenses, setLicenses] = useState([
    { id: 1, name: 'Warhammer' },
    { id: 2, name: 'D&D' },
    // Ajoutez d'autres licences au besoin
  ]);

  const [characters, setCharacters] = useState([
    { id: 1, name: '' },
    { id: 2, name: '' },
    { id: 3, name: '' },
  ]);

  const [items, setItems] = useState([
    { id: 1, name: '' },
    { id: 2, name: '' },
    { id: 3, name: '' },
  ]);

  const handleAddCharacter = () => {
    setCharacters([...characters, { id: characters.length + 1, name: '' }]);
  };

  const handleAddItem = () => {
    setItems([...items, { id: items.length + 1, name: '' }]);
  };

  const handleLicenseChange = (e: any, { value }: any) => {
    // Handle selected license
  };

  const handleAvatarChange = (e: any) => {
    // Handle avatar upload
  };

  const handleValidation = () => {
    // Handle form validation
  };

  return (
    <div>
      <Header />

      <div className="create-sheet">
        <div className="left-section">
          <h2>Fiche Personnage</h2>
          <Dropdown
            placeholder="Sélectionner une licence"
            fluid
            selection
            options={licenses.map((license) => ({
              key: license.id,
              text: license.name,
              value: license.id,
            }))}
            onChange={handleLicenseChange}
          />
          <input type="file" onChange={handleAvatarChange} />
          {characters.map((character) => (
            <Input key={character.id} placeholder="Placeholder" />
          ))}
          <Button onClick={handleAddCharacter} primary>
            +
          </Button>
        </div>

        <div className="right-section">
          <h2>Inventaire</h2>
          {items.map((item) => (
            <Input key={item.id} placeholder="Placeholder" />
          ))}
          <Button onClick={handleAddItem} primary>
            +
          </Button>
        </div>
      </div>
      <div className="submit-btn">
        <Button
          onClick={handleValidation}
          primary
          icon
          labelPosition="right"
          color="red"
        >
          Valider <Icon name="right arrow" />
        </Button>
      </div>

      <Footer />
    </div>
  );
}

export default CreateSheet;
