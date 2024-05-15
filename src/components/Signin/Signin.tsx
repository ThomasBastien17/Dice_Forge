import { Form, FormInput, Button } from 'semantic-ui-react';
import './Signin.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Signin() {
  return (
    <div className="signin">
      <Header />
      <h1 className="signin-title">Inscription</h1>
      <Form className="signin-form">
        <FormInput
          className="signin-input"
          icon="user"
          iconPosition="left"
          label="Nom"
          placeholder="Nom"
        />
        <FormInput
          className="signin-input"
          icon="user"
          iconPosition="left"
          label="Prénom"
          type="text"
          placeholder="Prénom"
        />
        <FormInput
          className="signin-input"
          icon="at"
          iconPosition="left"
          label="Email"
          type="email"
          placeholder="Email"
        />
        <FormInput
          className="signin-input"
          icon="lock"
          iconPosition="left"
          label="Mot de passe"
          type="password"
          placeholder="Mot de passe"
        />
        <FormInput
          className="signin-input"
          icon="lock"
          iconPosition="left"
          label="Confirmation"
          type="password"
          placeholder="Confirmation mot de passe"
        />

        <Button content="Valider" type="submit" color="red" />
      </Form>
      <Footer />
    </div>
  );
}

export default Signin;
