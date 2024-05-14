import './Login.scss';

function Login() {
  return (
    <div className="login">
      <h1 className="login-title">Connexion</h1>
      <form className="login-form">
        <label>
          <input className="login-input" type="email" placeholder="Email" />
        </label>
        <label>
          <input
            className="login-input"
            type="password"
            placeholder="Mot de passe"
          />
        </label>
        <button className="login-btn" type="submit">
          Valider
        </button>
      </form>
    </div>
  );
}

export default Login;
