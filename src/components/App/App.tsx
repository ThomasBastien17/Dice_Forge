import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import CreateGame from '../CreateGame/CreateGame';
import CreateSheet from '../CreateSheet/CreateSheet';
import Game from '../Game/Game';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Signup from '../Signup/Signup';
import './App.scss';
import ForgotPassword from '../Forgot-password/Forgot-password';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getTokenFromLocalStorage } from '../../localStorage/localStorage';
import { actionLogIn } from '../../store/reducers/userReducer';
import { addTokenJwtToAxiosInstance } from '../../axios/axios';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const { jwt } = getTokenFromLocalStorage();
    if (jwt) {
      dispatch(actionLogIn({ jwt }));
      addTokenJwtToAxiosInstance(jwt);
    } else {
      console.log('rien dans le local storage');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/login" element={<Login />} />
        <Route path="/api/signup" element={<Signup />} />
        <Route path="/api/creategame" element={<CreateGame />} />
        <Route path="/api/createsheet" element={<CreateSheet />} />
        <Route path="/api/profile" element={<Profile />} />
        <Route path="/api/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
