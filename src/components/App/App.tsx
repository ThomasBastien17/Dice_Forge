import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login">
          <Login />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
