import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Icon, Image } from 'semantic-ui-react';
import { IGames } from '../../@Types/game';
import axiosInstance from '../../axios/axios';
import { useAppSelector } from '../../hooks/hooks';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Profile.scss';

function Profile() {
  const lastname = useAppSelector((state) => state.user.lastname);
  const firstname = useAppSelector((state) => state.user.firstname);
  const token = useAppSelector((state) => state.user.token);

  const [games, setGames] = useState<IGames[]>([]);

  useEffect(() => {
    const userId = token;
    const fetchgames = async () => {
      try {
        const response = await axiosInstance.get(`/game`);
        console.log('profile response :', response);

        setGames(response.data.games);
      } catch (error) {
        console.error('error fetching game', error);
      }
    };
    fetchgames();
  }, [token]);

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
            <p>{lastname}</p>
            <p>{firstname}</p>
          </div>
        </div>
        <div className="game-session">
          <div className="profile-game">
            <h2 className="profile-game-title">
              Parties
              <NavLink to="/api/creategame">
                <Button
                  className="profile-game-btn"
                  content="Crée une partie"
                  color="red"
                  compact
                  size="mini"
                />
              </NavLink>
            </h2>
            {games.map((game) => (
              <div className="profile-game-edit" key={game.id}>
                <Icon size="large" name="pencil" />
                <Icon size="large" name="trash" />
                <p>{game.name}</p>
              </div>
            ))}
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
