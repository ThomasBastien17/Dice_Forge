import axios from 'axios';
import { useState } from 'react';
import {
  Button,
  Input,
  Icon,
  Segment,
  Grid,
  Divider,
  Form,
  FormField,
  TextArea,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './CreateSheet.scss';

function CreateSheet() {
  const [characteristics, setCharacteristics] = useState([
    { name: '', value: '' },
  ]);
  const [items, setItems] = useState([
    { name: '', description: '', quantity: 1 },
  ]);
  const [characterName, setCharacterName] = useState('');
  const [className, setClassName] = useState('');
  const [level, setLevel] = useState(1);
  const [gameId, setGameId] = useState(null);
  const [license, setLicense] = useState('');
  const [avatarPreview, setAvatarPreview] = useState(null);

  const postUserCreateSheet = async (formData) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/sheet',
        formData
      );
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAddCharacteristic = () => {
    setCharacteristics([...characteristics, { name: '', value: '' }]);
  };

  const handleRemoveCharacteristic = (index) => {
    const updatedCharacteristics = [...characteristics];
    updatedCharacteristics.splice(index, 1);
    setCharacteristics(updatedCharacteristics);
  };

  const handleAddItem = () => {
    setItems([...items, { name: '', description: '', quantity: 1 }]);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleCharacteristicNameChange = (index, value) => {
    const updatedCharacteristics = [...characteristics];
    updatedCharacteristics[index].name = value;
    setCharacteristics(updatedCharacteristics);
  };

  const handleCharacteristicValueChange = (index, value) => {
    const updatedCharacteristics = [...characteristics];
    updatedCharacteristics[index].value = value;
    setCharacteristics(updatedCharacteristics);
  };

  const handleItemChange = (index, key, value) => {
    const updatedItems = [...items];
    updatedItems[index][key] = value;
    setItems(updatedItems);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCharacterNameChange = (e) => {
    setCharacterName(e.target.value);
  };

  const handleClassNameChange = (e) => {
    setClassName(e.target.value);
  };

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  const handleGameIdChange = (e) => {
    setGameId(e.target.value);
  };

  const handleLicenseChange = (e) => {
    setLicense(e.target.value);
  };

  const handleSubmit = () => {
    const data = {
      name: characterName,
      image: avatarPreview,
      class: className,
      level,
      game_id: gameId,
      characteristics,
      items,
    };
    postUserCreateSheet(data);
  };

  return (
    <>
      <Header />
      <h2 className="sheet-title">Création de Fiche</h2>
      <Segment>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <div className="create-sheet">
              <div className="left-section">
                <h2>Fiche Personnage</h2>
                <div>
                  <Form>
                    <FormField>
                      <div>
                        <label htmlFor="characterNameInput">
                          Nom de votre personnage :
                        </label>
                        <input
                          id="characterNameInput"
                          placeholder="Nom de votre personnage"
                          value={characterName}
                          onChange={handleCharacterNameChange}
                          style={{ marginBottom: '1rem', marginTop: '1rem' }}
                        />
                      </div>
                      <div>
                        <label htmlFor="classNameInput">Classe :</label>
                        <input
                          id="classNameInput"
                          placeholder="Classe"
                          value={className}
                          onChange={handleClassNameChange}
                          style={{ marginBottom: '1rem', marginTop: '1rem' }}
                        />
                      </div>
                      <div>
                        <label htmlFor="levelInput">Niveau :</label>
                        <input
                          id="levelInput"
                          type="number"
                          placeholder="Niveau"
                          value={level}
                          onChange={handleLevelChange}
                          style={{ marginBottom: '1rem', marginTop: '1rem' }}
                        />
                      </div>
                      <div>
                        <label htmlFor="gameIdInput">ID du Jeu :</label>
                        <input
                          id="gameIdInput"
                          type="number"
                          placeholder="ID du Jeu"
                          value={gameId}
                          onChange={handleGameIdChange}
                          style={{ marginBottom: '1rem', marginTop: '1rem' }}
                        />
                      </div>
                    </FormField>
                  </Form>
                  <span>Importer un avatar </span>
                  <input type="file" onChange={handleAvatarChange} />
                  {avatarPreview && (
                    <div className="avatar-preview">
                      <img src={avatarPreview} alt="Avatar Preview" />
                    </div>
                  )}
                </div>
                {characteristics.map((characteristic, index) => (
                  <div
                    key={index}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <label>Choix des caractéristiques :</label>
                    <Input
                      placeholder="Nom de la caractéristique"
                      value={characteristic.name}
                      onChange={(e) =>
                        handleCharacteristicNameChange(index, e.target.value)
                      }
                      style={{ marginRight: '10px' }}
                    />
                    <Input
                      type="number"
                      placeholder="Valeur"
                      value={characteristic.value}
                      onChange={(e) =>
                        handleCharacteristicValueChange(index, e.target.value)
                      }
                      style={{ marginRight: '10px' }}
                    />
                    <Button
                      icon="minus"
                      onClick={() => handleRemoveCharacteristic(index)}
                    />
                  </div>
                ))}
                <Button onClick={handleAddCharacteristic} primary>
                  +
                </Button>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="right-section create-sheet">
              <h2>Inventaire</h2>
              <Grid columns={3}>
                {items.map((item, index) => (
                  <Grid.Row key={index} className="inventory-item">
                    <Grid.Column>
                      <label htmlFor={`item-name-${index}`}>
                        Nom de l'objet:
                      </label>
                      <Input
                        id={`item-name-${index}`}
                        placeholder="Nom de l'objet"
                        value={item.name}
                        onChange={(e) =>
                          handleItemChange(index, 'name', e.target.value)
                        }
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <label htmlFor={`item-description-${index}`}>
                        Description:
                      </label>
                      <TextArea
                        id={`item-description-${index}`}
                        placeholder="Entrez ici la description de votre objet"
                        value={item.description}
                        onChange={(e) =>
                          handleItemChange(index, 'description', e.target.value)
                        }
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <label htmlFor={`item-quantity-${index}`}>
                        Quantité:
                      </label>
                      <Input
                        id={`item-quantity-${index}`}
                        placeholder="Quantité"
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          handleItemChange(index, 'quantity', e.target.value)
                        }
                      />
                      <Button
                        icon="minus"
                        onClick={() => handleRemoveItem(index)}
                      />
                    </Grid.Column>
                  </Grid.Row>
                ))}
              </Grid>
              <Button onClick={handleAddItem} primary>
                +
              </Button>
            </div>
          </Grid.Column>
        </Grid>
        <Divider vertical />
      </Segment>
      <div className="valider-btn">
        <Button primary icon labelPosition="right" onClick={handleSubmit}>
          Valider <Icon name="right arrow" />
        </Button>
      </div>
      <Footer />
    </>
  );
}

export default CreateSheet;
