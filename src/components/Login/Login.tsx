import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { Button, Form, FormInput, Message } from 'semantic-ui-react';
import { IResponseData } from '../../@Types/response.data';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Login.scss';

interface LoginParameters extends React.InputHTMLAttributes<HTMLInputElement> {
  name: 'email' | 'password';
}

function Login({ name, ...rest }: LoginParameters) {
  // const [userLoginData, setUserLoginData] = useState<IUserLogin>({
  //   email: '',
  //   password: '',
  // });
  const inputValue = useAppSelector((state) => state.user.userCredential[name]);
  const dispatch = useAppDispatch();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const postUser = async (formData) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/login',
        formData
      );
      if (response.status === 200) {
        setSuccessMessage(response.data.message);
        setErrorMessage('');
        setIsHidden(false);
      }
      console.log(response);
      console.log(response.data.message);
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        const data = axiosError.response.data as IResponseData;
        if (axiosError.response.status === 401) {
          console.log("log d'erreur : ", data.error);

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
            className="login-input"
            icon="at"
            iconPosition="left"
            placeholder="Email"
            onChange={(event) => handleChange(event, 'email')}
            label="Email"
          />
          <FormInput
            className="login-input"
            icon="lock"
            iconPosition="left"
            type="password"
            placeholder="Mot de passe"
            onChange={(event) => handleChange(event, 'password')}
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
