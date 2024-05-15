import { Route, Routes } from 'react-router-dom';

import Login from '../Login/Login';
import Signin from '../Signin/Signin';
import Home from '../Home/Home';
import Game from '../Game/Game';
import CreateGame from '../CreateGame/CreateGame';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/creategame" element={<CreateGame />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
