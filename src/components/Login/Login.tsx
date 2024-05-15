import { Button, Form, FormInput } from 'semantic-ui-react';
import './Login.scss';

function Login() {
  return (
    <div className="login">
      <h1 className="login-title">Inscription</h1>
      <Form className="login-form">
        <FormInput
          className="login-input"
          icon="at"
          iconPosition="left"
          placeholder="Email"
        />
        <FormInput
          className="login-input"
          icon="password"
          iconPosition="left"
          type="password"
          placeholder="Mot de passe"
        />

        <Button
          className="login-btn"
          content="Se connecter"
          primary
          type="submit"
          color="red"
        />
      </Form>
    </div>
  );
}

export default Login;
