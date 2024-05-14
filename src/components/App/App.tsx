import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Signin from '../Signin/Signin';
import './App.scss';
import Login from '../Login/Login';

function App() {
  return (
    <div className="App">
      <Header />

      <Signin></Signin>
      <Login />
      <Footer />

    </div>
  );
}

export default App;
