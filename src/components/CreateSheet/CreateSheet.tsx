import React, { useState, ChangeEvent } from 'react';
import {
  Button,
  Input,
  Segment,
  Grid,
  Divider,
  Form,
  TextArea,
} from 'semantic-ui-react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import 'semantic-ui-css/semantic.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './CreateSheet.scss';
import { Characteristic, Item } from '../../@Types/sheet';

function CreateSheet() {
  const [characteristics, setCharacteristics] = useState<Characteristic[]>([
    { id: uuidv4(), name: '', value: '' },
  ]);
  const [items, setItems] = useState<Item[]>([
    { id: uuidv4(), name: '', description: '', quantity: 1 },
  ]);
  const [characterName, setCharacterName] = useState<string>('');
  const [className, setClassName] = useState<string>('');
  const [level, setLevel] = useState<number>(1);
  const [gameId, setGameId] = useState<string>('');
  const [license, setLicense] = useState<string>('');
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const postUserCreateSheet = async (formData: FormData) => {
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
    setCharacteristics([
      ...characteristics,
      { id: uuidv4(), name: '', value: '' },
    ]);
  };

  const handleRemoveCharacteristic = (id: string) => {
    setCharacteristics(characteristics.filter((char) => char.id !== id));
  };

  const handleAddItem = () => {
    setItems([
      ...items,
      { id: uuidv4(), name: '', description: '', quantity: 1 },
    ]);
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleCharacteristicChange = (
    id: string,
    key: keyof Characteristic,
    value: string
  ) => {
    setCharacteristics(
      characteristics.map((char) =>
        char.id === id ? { ...char, [key]: value } : char
      )
    );
  };

  const handleItemChange = (
    id: string,
    key: keyof Item,
    value: string | number
  ) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [key]: value } : item))
    );
  };

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('name', characterName);
    if (avatarPreview) formData.append('image', avatarPreview);
    formData.append('class', className);
    formData.append('level', level.toString());
    formData.append('game_id', gameId);
    formData.append('license', license);
    characteristics.forEach((char, index) => {
      formData.append(`characteristics[${index}][name]`, char.name);
      formData.append(`characteristics[${index}][value]`, char.value);
    });
    items.forEach((item, index) => {
      formData.append(`items[${index}][name]`, item.name);
      formData.append(`items[${index}][description]`, item.description);
      formData.append(`items[${index}][quantity]`, item.quantity.toString());
    });
    postUserCreateSheet(formData);
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
                    <Form.Field>
                      <div>
                        <label htmlFor="characterNameInput">
                          Nom de votre personnage :
                        </label>
                        <Input
                          id="characterNameInput"
                          placeholder="Nom de votre personnage"
                          value={characterName}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setCharacterName(e.target.value)
                          }
                          style={{ marginBottom: '1rem', marginTop: '1rem' }}
                        />
                      </div>
                      <div>
                        <label htmlFor="classNameInput">Classe :</label>
                        <Input
                          id="classNameInput"
                          placeholder="Classe"
                          value={className}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setClassName(e.target.value)
                          }
                          style={{ marginBottom: '1rem', marginTop: '1rem' }}
                        />
                      </div>
                      <div>
                        <label htmlFor="levelInput">Niveau :</label>
                        <Input
                          id="levelInput"
                          type="number"
                          placeholder="Niveau"
                          value={level}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setLevel(Number(e.target.value))
                          }
                          style={{ marginBottom: '1rem', marginTop: '1rem' }}
                        />
                      </div>
                      <div>
                        <label htmlFor="gameIdInput">ID du Jeu :</label>
                        <Input
                          id="gameIdInput"
                          type="number"
                          placeholder="ID du Jeu"
                          value={gameId}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setGameId(e.target.value)
                          }
                          style={{ marginBottom: '1rem', marginTop: '1rem' }}
                        />
                      </div>
                    </Form.Field>
                  </Form>
                  <span>Importer un avatar </span>
                  <input type="file" onChange={handleAvatarChange} />
                  {avatarPreview && (
                    <div className="avatar-preview">
                      <img src={avatarPreview} alt="Avatar Preview" />
                    </div>
                  )}
                </div>
                {characteristics.map((characteristic) => (
                  <div
                    key={characteristic.id}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <label>Choix des caractéristiques :</label>
                    <Input
                      placeholder="Nom de la caractéristique"
                      value={characteristic.name}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleCharacteristicChange(
                          characteristic.id,
                          'name',
                          e.target.value
                        )
                      }
                      style={{ marginRight: '10px' }}
                    />
                    <Input
                      type="number"
                      placeholder="Valeur"
                      value={characteristic.value}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleCharacteristicChange(
                          characteristic.id,
                          'value',
                          e.target.value
                        )
                      }
                      style={{ marginRight: '10px' }}
                    />
                    <Button
                      icon="minus"
                      onClick={() =>
                        handleRemoveCharacteristic(characteristic.id)
                      }
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
                {items.map((item) => (
                  <Grid.Row key={item.id} className="inventory-item">
                    <Grid.Column>
                      <label htmlFor={`item-name-${item.id}`}>
                        Nom de l'objet:
                      </label>
                      <Input
                        id={`item-name-${item.id}`}
                        placeholder="Nom de l'objet"
                        value={item.name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleItemChange(item.id, 'name', e.target.value)
                        }
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <label htmlFor={`item-description-${item.id}`}>
                        Description:
                      </label>
                      <TextArea
                        id={`item-description-${item.id}`}
                        placeholder="Entrez ici la description de votre objet"
                        value={item.description}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                          handleItemChange(
                            item.id,
                            'description',
                            e.target.value
                          )
                        }
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <label htmlFor={`item-quantity-${item.id}`}>
                        Quantité:
                      </label>
                      <Input
                        id={`item-quantity-${item.id}`}
                        placeholder="Quantité"
                        type="number"
                        value={item.quantity}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleItemChange(
                            item.id,
                            'quantity',
                            Number(e.target.value)
                          )
                        }
                      />
                      <Button
                        icon="minus"
                        onClick={() => handleRemoveItem(item.id)}
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
        <Button primary onClick={handleSubmit}>
          Valider
        </Button>
      </div>
      <Footer />
    </>
  );
}

export default CreateSheet;
