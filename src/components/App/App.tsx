import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Signin from '../Signin/Signin';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />

      <Signin />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
