import { Route, Routes } from 'react-router-dom';

import CreateGame from '../CreateGame/CreateGame';
import CreateSheet from '../CreateSheet/CreateSheet';
import Game from '../Game/Game';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Signup from '../Signup/Signup';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/login" element={<Login />} />
        <Route path="/api/signup" element={<Signup />} />
        <Route path="/api/creategame" element={<CreateGame />} />
        <Route path="/api/createsheet" element={<CreateSheet />} />
        <Route path="/api/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
