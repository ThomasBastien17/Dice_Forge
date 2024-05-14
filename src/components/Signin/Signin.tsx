import { Label, Input } from 'semantic-ui-react';
import './Signin.scss';

function Signin() {
  return (
    <div className="signin">
      <h1 className="signin-title">Inscription</h1>
      <form className="signin-form">
        <Label as={Input} className="signin-label">
          Avatar
          <Input type="file" />
        </Label>
        <Label className="signin-label">
          Nom
          <Input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Entrez votre nom"
          />
        </Label>
        <label htmlFor="firsname" className="signin-label">
          Prenom
        </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Entrez votre prenom"
        />
        <label htmlFor="email" className="signin-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          pattern=".+@example\.com"
          size={30}
          required
          placeholder="Entrez votre Email : exemple@email.com"
        />
        <label htmlFor="pass" className="signin-label">
          Mot de passe :
        </label>
        <input
          type="password"
          id="pass"
          name="password"
          required
          placeholder="Votre mot de passe"
        />
        <label htmlFor="pass-confirm" className="signin-label">
          Confirmation :
        </label>
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
