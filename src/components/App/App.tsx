import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import CreateGame from '../CreateGame/CreateGame';
import CreateSheet from '../CreateSheet/CreateSheet';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Signup from '../Signup/Signup';
import './App.scss';
import ForgotPassword from '../Forgot-password/Forgot-password';
import { useAppSelector } from '../../hooks/hooks';

function App() {
  const user = useAppSelector((state) => state.user);
  console.log('je suis le state user :', user);

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
