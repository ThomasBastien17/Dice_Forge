import 'semantic-ui-css/semantic.min.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './CreateSheet.scss';


function CreateSheet() {

  return (
    <div className="create-sheet">
      <Header />
      <div className="create-sheet-content">
        <h1 className="create-sheet-title">Crée ta fiche de personnages</h1>
        <div className="create-sheet-subtitle">Choisit quelles editions de jeux</div>
      </div>
      <div className="create-sheet-form">
        <div className="create-sheet-options">
          <NavLink to="/api/createsheetDnd5">
          <div className="create-sheet-caption">Donjons & Dragons 5e</div>
          <Image
            src="/dnd5e.webp"
            alt="Dungeons and Dragons 5th Edition"
            size='medium'
            rounded
            bordered
          />
          </NavLink>
          <NavLink to="/api/createsheetDnd2024">
          <div className="create-sheet-caption">Donjons & Dragons 2024</div>
          <Image
            src="/dnd2024.jpg"
            alt="Dungeons and Dragons 2024"
            size='medium'
            rounded
            bordered
          />
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateSheet;
