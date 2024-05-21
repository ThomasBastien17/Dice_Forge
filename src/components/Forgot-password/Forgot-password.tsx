import { Button, Form, FormInput } from 'semantic-ui-react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Forgot-password.scss';

function ForgotPassword() {
  return (
    <div className="forgot-password">
      <Header />
      <h1 className="forgot-password-title">Mot de passe oublié ?</h1>
      <p className="forgot-password-text">
        Vous allez recevoir un e-mail allant vous permettre de modifier votre
        mot de passe.
      </p>
      <div className="forgot-password-form">
        <Form>
          <FormInput
            label="Email"
            icon="at"
            iconPosition="left"
            placeholder="Email"
            className="forgot-password-input"
          />
          <Button type="submit" content="Envoyer" color="grey" />
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default ForgotPassword;
