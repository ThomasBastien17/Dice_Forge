import { Button, Form, FormInput } from 'semantic-ui-react';
import './Login.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Login() {
  return (
    <div className="login">
      <Header />
      <h1 className="login-title">Connexion</h1>
      <div className="login-form">
        <Form>
          <FormInput
            className="login-input"
            icon="at"
            iconPosition="left"
            placeholder="Email"
            label="Email"
          />
          <FormInput
            className="login-input"
            icon="lock"
            iconPosition="left"
            type="password"
            placeholder="Mot de passe"
            label="Mot de passe"
          />
          <Button content="Se connecter" type="submit" color="red" />
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
