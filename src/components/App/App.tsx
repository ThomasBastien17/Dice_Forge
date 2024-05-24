import { Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/hooks';
import CreateGame from '../CreateGame/CreateGame';
import CreateSheet from '../CreateSheet/CreateSheet';
import ForgotPassword from '../Forgot-password/Forgot-password';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import ResetPassword from '../Reset-password/Reset-password';
import Signup from '../Signup/Signup';
import './App.scss';

function App() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useDispatch();
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
        <Route path="/api/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
