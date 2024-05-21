import axios from 'axios';
import { useState } from 'react';
import { Button, Form, FormInput } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { IUserLogin } from '../../@Types/user';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Login.scss';

function Login() {
  const [userLoginData, setUserLoginData] = useState<IUserLogin>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const postUser = async (formData: IUserLogin) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/login',
        formData
      );
      console.log(response);
      setSuccess(true);
      setError(null);
      navigate('/');
    } catch (err) {
      setError('Échec de la connexion. Veuillez vérifier vos informations.');
      setSuccess(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userLoginData.email || !userLoginData.password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }
    setError(null);
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
            label="Email"
            className="login-input"
            icon="at"
            iconPosition="left"
            placeholder="Email"
            onChange={(event) => handleChange(event, 'email')}
          />
          <FormInput
            label="Mot de passe"
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
