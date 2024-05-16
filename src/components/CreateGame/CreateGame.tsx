import './CreateGame.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function CreateGame() {
  return (
    <div className="create-game">
      <Header />
      <h1 className="create-title">Créer ta partie</h1>
      <Footer />
    </div>
  );
}

export default CreateGame;
