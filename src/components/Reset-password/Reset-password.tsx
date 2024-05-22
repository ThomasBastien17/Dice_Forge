import { Button, Form, FormInput } from 'semantic-ui-react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Reset-password.scss';

function ResetPassword() {
  return (
    <div className="reset-password">
      <Header />
      <h1 className="reset-password-title">Reinitialiser votre mot de passe</h1>
      <p className="reset-password-text">
        Veuillez choisir un nouveau mot de passe.
      </p>
      <div className="reset-password-form">
        <Form>
          <FormInput
            label="Nouveau mot de passe"
            icon="lock"
            iconPosition="left"
            placeholder="Nouveau mot de passe"
            className="reset-password-input"
          />
          <FormInput
            label="Confirmation mot de passe"
            icon="lock"
            iconPosition="left"
            placeholder="Confirmation mot de passe"
            className="reset-password-input"
          />
          <Button type="submit" content="Envoyer" color="grey" />
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default ResetPassword;
