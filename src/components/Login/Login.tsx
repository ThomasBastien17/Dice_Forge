import { Button, Form, FormInput } from 'semantic-ui-react';
import './Login.scss';

function Login() {
  return (
    <div className="login">
      <h1 className="login-title">Inscription</h1>
      <div className="login-form">
        <Form>
          <FormInput
            className="login-input"
            icon="at"
            iconPosition="left"
            placeholder="Email"
          />
          <FormInput
            className="login-input"
            icon="lock"
            iconPosition="left"
            type="password"
            placeholder="Mot de passe"
          />
          <Button content="Se connecter" type="submit" color="red" />
        </Form>
      </div>
    </div>
  );
}

export default Login;
