import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { Button, Form, FormInput, Message } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { IUserLogin } from '../../@Types/user';
import { IResponseData } from '../../@Types/response.data';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Login.scss';

interface LoginParameters {
  name: string;
}

function Login({ name, ...rest }: LoginParameters) {
  const [userLoginData, setUserLoginData] = useState<IUserLogin>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();
  const inputValue = useAppSelector((state) => state.user.userCredential[name]);
  const dispatch = useAppDispatch();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const postUser = async (formData: IUserLogin) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/login',
        formData
      );
      console.log(response);
      console.log(response.data.message);
      if (response.status === 200) {
        setSuccess(true);
        setError(null);
        navigate('/');
      }
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        const data = axiosError.response.data as IResponseData;
        if (axiosError.response.status === 401) {
          setErrorMessage(data.error);
          setSuccessMessage('');
          setIsHidden(false);
        } else if (axiosError.response.status === 500) {
          setErrorMessage('Erreur serveur');
          setSuccessMessage('');
          setIsHidden(false);
        }
      }
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
    postUser(inputValue);
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
        {!isHidden &&
          (errorMessage ? (
            <Message negative>{errorMessage}</Message>
          ) : (
            <Message success header={successMessage} />
          ))}

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
          <a href="/api/forgot-password">Mot de passe oublié ?</a>
          <Button content="Se connecter" type="submit" color="red" />
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
