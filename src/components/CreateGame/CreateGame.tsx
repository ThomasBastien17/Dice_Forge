import React, { useState } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function CreateGame() {
  const [inputs, setInputs] = useState([
    { id: 1, name: 'Titre', placeholder: 'Titre', value: '' },
    { id: 2, name: 'Theme', placeholder: 'Thème', value: '' },
    { id: 3, name: 'Joueur', placeholder: 'Ajouter un joueur', value: '' },
  ]);

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = { ...newInputs[index], value: value };
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([
      ...inputs,
      {
        id: inputs.length + 1,
        name: `Joueur${inputs.length + 1}`,
        placeholder: 'Paramètre personnalisé',
        value: '',
      },
    ]);
  };

  const handleRemoveInput = (id: number) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  return (
    <>
      <Header />
      <div className="create">
        <h1 className="create-title">Créer ta partie</h1>
        <div>
          <Form>
            {inputs.map((input, index) => (
              <Form.Field key={input.id}>
                <Input
                  placeholder={input.placeholder}
                  value={input.value}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
                {index >= 3 && (
                  <Button
                    onClick={() => handleRemoveInput(input.id)}
                    icon="minus"
                    negative
                  />
                )}
              </Form.Field>
            ))}
          </Form>
          <Button onClick={handleAddInput} primary>
            +
          </Button>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default CreateGame;
