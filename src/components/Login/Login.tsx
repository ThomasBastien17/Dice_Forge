import axios from 'axios';
import { useState } from 'react';
import { Button, Form, FormInput } from 'semantic-ui-react';
import { IUser } from '../../@Types/user';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Login.scss';

function Login() {
  const [userLoginData, setUserLoginData] = useState<IUser>({
    email: '',
    password: '',
  });

  const postUser = async (formData: IUser) => {
    const response = await axios.post(
      'http://localhost:5000/api/login',
      formData
    );
    console.log(response);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postUser(userLoginData);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    inputName: string
  ) => {
    event.preventDefault();
    setUserLoginData((previousData) => ({
      ...previousData,
      [inputName]: event.target.value,
    }));
  };

  return (
    <div className="login">
      <Header />
      <h1 className="login-title">Connexion</h1>
      <div className="login-form">
        <Form onSubmit={handleSubmit}>
          <FormInput
            className="login-input"
            icon="at"
            iconPosition="left"
            placeholder="Email"
            onChange={(event) => handleChange(event, 'email')}
          />
          <FormInput
            className="login-input"
            icon="lock"
            iconPosition="left"
            type="password"
            placeholder="Mot de passe"
            onChange={(event) => handleChange(event, 'password')}
          />
          <Button content="Se connecter" type="submit" color="red" />
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
