import { Route, Routes } from 'react-router-dom';

import CreateGame from '../CreateGame/CreateGame';
import Game from '../Game/Game';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/creategame" element={<CreateGame />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
