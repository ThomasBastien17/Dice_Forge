import { Route, Routes } from 'react-router-dom';

import Login from '../Login/Login';
import Signin from '../Signin/Signin';
import Home from '../Home/Home';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
