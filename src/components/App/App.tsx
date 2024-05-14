
import { Route, Routes } from 'react-router-dom';


import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Signin from '../Signin/Signin';
import './App.scss';
import Login from '../Login/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="signin">
          <Signin />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
