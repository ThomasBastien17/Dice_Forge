import { Button, Form, FormInput } from 'semantic-ui-react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Signup.scss';

interface SignupProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}
function Signup({ email, setEmail, password, setPassword }: SignupProps) {
  return (
    <div className="signup">
      <Header />
      <h1 className="signup-title">Inscription</h1>
      <Form className="signup-form">
        <FormInput
          className="signup-input"
          icon="user"
          iconPosition="left"
          label="Nom"
          placeholder="Nom"
        />
        <FormInput
          className="signup-input"
          icon="user"
          iconPosition="left"
          label="Prénom"
          type="text"
          placeholder="Prénom"
        />
        <FormInput
          className="signup-input"
          icon="at"
          iconPosition="left"
          label="Email"
          type="email"
          placeholder="Email"
        />
        <FormInput
          className="signup-input"
          icon="lock"
          iconPosition="left"
          label="Mot de passe"
          type="password"
          placeholder="Mot de passe"
        />
        <FormInput
          className="signup-input"
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

export default Signup;
