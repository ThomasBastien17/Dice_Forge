import { useState } from 'react';
import {
  Dropdown,
  Button,
  Input,
  Icon,
  Segment,
  Grid,
  Divider,
  Form,
  FormField,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './CreateSheet.scss';

function CreateSheet() {
  const [licenses, setLicenses] = useState([
    { id: 1, name: 'Warhammer' },
    { id: 2, name: 'D&D' },
    // Add other licenses as needed
  ]);

  const [characteristics, setCharacteristics] = useState([
    { id: 1, name: '' },
    { id: 2, name: '' },
    { id: 3, name: '' },
  ]);

  const [items, setItems] = useState([
    { id: 1, name: '' },
    { id: 2, name: '' },
    { id: 3, name: '' },
  ]);

  const [avatarPreview, setAvatarPreview] = useState(null);

  const [selectedCharacteristics, setSelectedCharacteristics] = useState([]);

  const [selectedWeapons, setSelectedWeapons] = useState([]);

  const handleAddCharacteristics = () => {
    setCharacteristics([
      ...characteristics,
      { id: characteristics.length + 1, name: '' },
    ]);
  };

  const handleAddItem = () => {
    setItems([...items, { id: items.length + 1, name: '' }]);
  };

  const handleLicenseChange = (e, { value }) => {
    // Handle selected license
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

  const handleCharacteristicsChange = (e, { value }) => {
    if (value.length <= 3) {
      setSelectedCharacteristics(value);
    }
  };

  const handleWeaponsChange = (e, { value }) => {
    if (value.length <= 1) {
      setSelectedWeapons(value);
    }
  };

  const weaponsOptions = [
    { key: 'hache', text: 'Hache', value: 'hache' },
    { key: 'arc', text: 'Arc', value: 'arc' },
    { key: 'épée', text: 'Epée', value: 'épée' },
    { key: 'arbalette', text: 'Arbalette', value: 'arbalette' },
    { key: 'masse', text: 'Masse', value: 'masse' },
  ];

  const characteristicsOptions = [
    { key: 'charisme', text: 'Charisme', value: 'charisme' },
    { key: 'dextérité', text: 'Dextérité', value: 'dextérité' },
    { key: 'force', text: 'Force', value: 'force' },
    { key: 'agilité', text: 'Agilité', value: 'agilité' },
    { key: 'esprit', text: 'Esprit', value: 'esprit' },
  ];

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
                  <Form className="">
                    <FormField>
                      <label>Nom de votre personnage</label>
                      <input />
                    </FormField>
                  </Form>
                  <span>Importer un avatar </span>
                  <input type="file" onChange={handleAvatarChange} />
                  {avatarPreview && (
                    <div className="avatar-preview">
                      {avatarPreview && (
                        <img src={avatarPreview} alt="Avatar Preview" />
                      )}
                    </div>
                  )}
                </div>
                <Dropdown
                  placeholder="Sélectionnez une licence"
                  fluid
                  selection
                  options={licenses.map((license) => ({
                    key: license.id,
                    text: license.name,
                    value: license.id,
                  }))}
                  onChange={handleLicenseChange}
                />

                <Dropdown
                  placeholder="Choisissez 3 caractéristiques"
                  fluid
                  multiple
                  selection
                  search
                  options={characteristicsOptions}
                  value={selectedCharacteristics}
                  onChange={handleCharacteristicsChange}
                />
                <Button onClick={handleAddCharacteristics} primary>
                  +
                </Button>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="right-section create-sheet">
              <h2>Inventaire</h2>
              <Dropdown
                placeholder="Choisissez une arme"
                fluid
                multiple
                selection
                search
                options={weaponsOptions}
                value={selectedWeapons}
                onChange={handleWeaponsChange}
              />
              <Button onClick={handleAddItem} primary>
                +
              </Button>
            </div>
          </Grid.Column>
        </Grid>
        <Divider vertical />
      </Segment>
      <div className="valider-btn">
        <Button primary icon labelPosition="right">
          Valider <Icon name="right arrow" />
        </Button>
      </div>
      <Footer />
    </>
  );
}

export default CreateSheet;
