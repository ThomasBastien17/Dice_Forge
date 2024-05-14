import './Signin.scss';

function Signin() {
  return (
    <div className="signin">
      <form className="signin-form">
        <label htmlFor="user-avatar" className="signin-label">
          Choisisez un avatar de profil
        </label>
        <input
          type="file"
          id="user-avatar"
          name="user-avatar"
          accept="image/png, image/jpeg"
        />
        <label htmlFor="lastname" className="signin-label">
          Nom
        </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Entrez votre nom"
        />
        <label htmlFor="firsname" className="signin-label">
          Prenom
        </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Entrez votre prenom"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          pattern=".+@example\.com"
          size={30}
          required
          placeholder="Entrez votre Email : exemple@email.com"
        />
        <label htmlFor="pass">Mot de passe :</label>
        <input
          type="password"
          id="pass"
          name="password"
          required
          placeholder="Votre mot de passe"
        />
        <label htmlFor="pass-confirm">Confirmation :</label>
        <input
          type="password"
          id="pass-confirm"
          name="password-confirm"
          required
          placeholder="confirmez votre mot de passe"
        />
      </form>
    </div>
  );
}

export default Signin;
