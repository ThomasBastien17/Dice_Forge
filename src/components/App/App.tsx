import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Signin from '../Signin/Signin';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Signin></Signin>
      <Footer></Footer>
    </div>
  );
}

export default App;
