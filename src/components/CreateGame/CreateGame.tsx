import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Dropdown, Form, Input } from 'semantic-ui-react';
import { ILicenceOption } from '../../@Types/game';
import axiosInstance from '../../axios/axios';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './CreateGame.scss';

function CreateGame() {
  const [title, setTitle] = useState('');
  const [licences, setLicences] = useState<string>('');
  const [players, setPlayers] = useState<string[]>(['']);
  const [licenseOptions, setLicenseOptions] = useState<ILicenceOption[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get('license')
      .then((response) => {
        const { data } = response;
        console.log('Licences:', data);

        if (data) {
          const options = data.map((license: ILicenceOption) => ({
            key: license.id,
            text: license.name,
            value: license.name,
          }));
          setLicenseOptions(options);
        } else {
          setLicenseOptions([]);
        }
      })
      .catch((error) => console.error('Erreur: ', error));
  }, []);

  const postGame = async (formData: any) => {
    try {
      const response = await axiosInstance.post('/game', formData);

      console.log('Success:', response.data);
      navigate('/api/profile');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handlePlayerChange = (index: number, value: string) => {
    const newPlayers = [...players];
    newPlayers[index] = value;
    setPlayers(newPlayers);
  };

  const handleAddPlayer = () => {
    setPlayers([...players, '']);
  };

  const handleRemovePlayer = (index: number) => {
    setPlayers(players.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    const email = players;
    const formData = {
      name: title,
      license_name: licences,
      email: email,
    };
    console.log('Form data:', formData);

    postGame(formData);
  };

  return (
    <div className="create">
      <Header />
      <div className="create-content">
        <h1 className="create-title">Créer ta partie</h1>
        <div className="create-form">
          <Form>
            <Form.Field>
              <Input
                placeholder="Titre"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <Dropdown
                placeholder="Licence"
                fluid
                selection
                options={licenseOptions}
                value={licences}
                onChange={(e, { value }) => setLicences(value as string)}
              />
            </Form.Field>
            {players.map((player, index) => (
              <Form.Field key={index}>
                <Input
                  placeholder="Ajouter un joueur"
                  value={player}
                  onChange={(e) => handlePlayerChange(index, e.target.value)}
                  icon="at"
                />
                {index > 0 && (
                  <Button
                    onClick={() => handleRemovePlayer(index)}
                    icon="minus"
                    negative
                    compact
                  />
                )}
              </Form.Field>
            ))}
          </Form>
          <Button onClick={handleAddPlayer} primary>
            +
          </Button>
          <div className="submit-container">
            <Button onClick={handleSubmit} color="red">
              Valider
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateGame;
