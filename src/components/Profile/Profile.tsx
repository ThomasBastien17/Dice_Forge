import { Button, Icon, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Profile.scss';

function Profile() {
  return (
    <div className="profile">
      <Header />
      <div className="profile-page">
        <div className="profile-user">
          <Image
            src="public/LogoDiceForge.jpg"
            circular
            size="small"
            className="profile-avatar"
          />
          <div className="profile-user-name">
            <p>Dupont</p>
            <p>Bernard</p>
          </div>
        </div>
        <div className="game-session">
          <div className="profile-game">
            <h2 className="profile-game-title">
              Parties
              <NavLink to="/creategame">
                <Button
                  className="profile-game-btn"
                  content="Crée une partie"
                  color="red"
                  compact
                  size="mini"
                />
              </NavLink>
            </h2>
            <div className="profile-game-edit">
              <Icon size="large" name="pencil" />
              <Icon size="large" name="trash" />
              <p>Partie 1</p>
            </div>
            <div className="profile-game-edit">
              <Icon size="large" name="pencil" />
              <Icon size="large" name="trash" />
              <p>Partie 2</p>
            </div>
            <div className="profile-game-edit">
              <Icon size="large" name="pencil" />
              <Icon size="large" name="trash" />
              <p>Partie 3</p>
            </div>
          </div>
          <div className="profile-session">
            <h2 className="profile-session-title">Session à venir :</h2>
            <div className="profile-session-edit">
              <Button content="-" size="mini" compact />
              <p className="profile-session-edit-date">
                partie 1 : Prochaine session le 22/05/24
              </p>
            </div>
            <div className="profile-session-edit">
              <Button content="+" size="mini" compact />
              <p className="profile-session-edit-date">
                partie 2 : Pas de session programmés
              </p>
            </div>
            <div className="profile-session-edit">
              <Button content="+" size="mini" compact />
              <p className="profile-session-edit-date">
                partie 3 : Pas de session programmés
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
