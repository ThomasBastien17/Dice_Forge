import { Route, Routes } from 'react-router-dom';

import { useState } from 'react';
import CreateGame from '../CreateGame/CreateGame';
import Game from '../Game/Game';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import './App.scss';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/signup"
          element={
            <Signup
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          }
        />
        <Route path="/creategame" element={<CreateGame />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
