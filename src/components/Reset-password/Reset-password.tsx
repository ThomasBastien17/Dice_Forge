import { useState } from 'react';
import { Button, Form, FormInput, Message } from 'semantic-ui-react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Reset-password.scss';

function ResetPassword() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlesubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/api/reset-password'
      );
      console.log(response);
      if (response.status === 200) {
        setMessage(response.data.message);
        setError(null);
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
      setMessage(null);
    }
  };
  return (
    <div className="reset-password">
      <Header />
      <h1 className="reset-password-title">Reinitialiser votre mot de passe</h1>
      <p className="reset-password-text">
        Veuillez choisir un nouveau mot de passe.
      </p>
      {message && <Message success content={message} />}
      {error && <Message negative content={error} />}
      <div className="reset-password-form">
        <Form onSubmit={handlesubmit}>
          <FormInput
            label="Nouveau mot de passe"
            icon="lock"
            iconPosition="left"
            placeholder="Nouveau mot de passe"
            className="reset-password-input"
            type="password"
          />
          <FormInput
            label="Confirmation mot de passe"
            icon="lock"
            iconPosition="left"
            placeholder="Confirmation mot de passe"
            className="reset-password-input"
            type="password"
          />
          <Button type="submit" content="Envoyer" color="grey" />
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default ResetPassword;
