import { Route, Routes } from 'react-router-dom';

import Login from '../Login/Login';
import Signin from '../Signin/Signin';
import Home from '../Home/Home';
import './App.scss';
import CreateGame from '../CreateGame/CreateGame';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/creategame" element={<CreateGame />} />
      </Routes>
    </div>
  );
}

export default App;
