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
        <h1 className="Header-title">Dice Forge</h1>
      </div>
      <div className="Header-block2">
        <a className="Header-link" href="/inscription">
          Inscription
        </a>
        <a className="Header-link" href="/connexion">
          Connexion
        </a>
      </div>
    </div>
  );
}
export default Header;
