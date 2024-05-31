import { useState, ChangeEvent } from 'react';
import { Button, Form, FormInput, FormTextArea } from 'semantic-ui-react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import 'semantic-ui-css/semantic.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './CreateSheet.scss';
import { Characteristic, Item } from '../../@Types/sheet';
import axiosInstance from '../../axios/axios';
import { sortUserPlugins } from 'vite';

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
      const response = await axiosInstance.post('sheet', formData);
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
    <div className="create-sheet">
      <Header />
      <h1 className="create-sheet-title">Création de Fiche</h1>
      <div className="create-sheet-content">
        <h2 className="create-sheet-subtitle">Fiche Personnage</h2>
        <Form className="create-sheet-form">
          <div>
            <div>
              <FormInput
                label="Nom du personnage"
                className="create-sheet-input"
                placeholder="Nom de votre personnage"
                value={characterName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCharacterName(e.target.value)
                }
              />
              <FormInput
                label="Classe:"
                className="create-sheet-input"
                placeholder="Classe"
                value={className}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setClassName(e.target.value)
                }
              />
              <FormInput
                label="Niveau:"
                className="create-sheet-input"
                type="number"
                placeholder="Niveau"
                value={level}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setLevel(Number(e.target.value))
                }
              />
              <FormInput
                label="ID de la partie:"
                className="create-sheet-input"
                type="number"
                placeholder="ID du Jeu"
                value={gameId}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setGameId(e.target.value)
                }
              />
            </div>

            <div className="create-sheet-avatar">
              <span>Importer un avatar </span>
              <input type="file" onChange={handleAvatarChange} />
              {avatarPreview && (
                <div className="create-sheet-avatar-preview">
                  <img
                    className="create-sheet-avatar-img"
                    src={avatarPreview}
                    alt="Avatar Preview"
                  />
                </div>
              )}
            </div>
          </div>
          {characteristics.map((characteristic) => (
            <div className="create-sheet-caracteristic" key={characteristic.id}>
              <FormInput
                className="create-sheet-input"
                label="Choix des caractéristiques :"
                placeholder="Nom de la caractéristique"
                value={characteristic.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleCharacteristicChange(
                    characteristic.id,
                    'name',
                    e.target.value
                  )
                }
              />
              <FormInput
                label="Valeur :"
                className="create-sheet-input-value"
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
              />
              <Button
                className="create-sheet-caracteristic-btn"
                icon="minus"
                onClick={() => handleRemoveCharacteristic(characteristic.id)}
              />
            </div>
          ))}
          <Button
            className="create-sheet-caracteristic-add-btn"
            onClick={handleAddCharacteristic}
            icon="plus"
          />

          <h2 className="create-sheet-subtitle">Inventaire</h2>
          {items.map((item) => (
            <div className="create-sheet-inventory-content">
              <FormInput
                className="create-sheet-input"
                label="Nom de l'objet :"
                placeholder="Nom de l'objet"
                value={item.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleItemChange(item.id, 'name', e.target.value)
                }
              />
              <FormTextArea
                className="create-sheet-input"
                label="Description"
                placeholder="Entrez ici la description de votre objet"
                value={item.description}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  handleItemChange(item.id, 'description', e.target.value)
                }
              />
              <div className="create-sheet-inventory-quantity">
                <FormInput
                  className="create-sheet-input-quantity"
                  label="Quantité :"
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
                  className="create-sheet-inventory-btn"
                  icon="minus"
                  onClick={() => handleRemoveItem(item.id)}
                />
              </div>
            </div>
          ))}
          <Button
            className="create-sheet-inventory-add-btn"
            onClick={handleAddItem}
            icon="plus"
          />
          <div className="submit-btn">
            <Button
              className="create-sheet-submit-btn"
              type="submit"
              content="Valider"
              onClick={handleSubmit}
            />
          </div>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default CreateSheet;
