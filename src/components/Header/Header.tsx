import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <div className="Header">
      <div className="Header-block">
        <img
          className="Header-logo"
          src="../../../public/d20-7136921_640.png"
          alt="Logo Dice Forge"
        />
        <NavLink to="/">
          <h1 className="Header-title">Dice Forge</h1>
        </NavLink>
      </div>
      <div className="Header-block2">
        <NavLink className="Header-link" to="/api/signup">
          Inscription
        </NavLink>
        <NavLink className="Header-link" to="/api/login">
          Connexion
        </NavLink>
        <NavLink className="Header-link" to="/profile">
          Profil
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
