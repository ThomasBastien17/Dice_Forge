import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Icon, Image } from 'semantic-ui-react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { actionResetCurrentGame, actionSetGameId } from '../../store/reducers/gameReducer';
import {
  actionDeleteGame,
  actionSearchGames,
} from '../../store/thunks/gameThunks';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Profile.scss';

function Profile() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const games = useAppSelector((state) => state.game.games);
  // const [games, setGames] = useState<IGames[]>([]);
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(actionSearchGames());
    dispatch(actionResetCurrentGame());
    
  }, []);

  // useEffect(() => {
  //   const getGame = async () => {
  //     try {
  //       const response = await axiosInstance.get(`/profile/${user.userId}`);
  //       console.log('je suis la reponse du get de profile', response);
  //       setGames(response.data);
  //     } catch (error) {
  //       console.log('error', error);
  //     }
  //   };
  //   getGame();
  // }, [user]);

  // const deleteGame = async (gameId: number) => {
  //   try {
  //     await axiosInstance.delete(`/game/${gameId}`);
  //     setGames((prevGames) => prevGames.filter((game) => game.id !== gameId));
  //   } catch (error) {
  //     console.log('Erreur lors de la suppression de la partie', error);
  //   }
  // };

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
            alt="avatar de l'utilisateur"
          />
          <div className="profile-user-name">
            <p>{user.lastname}</p>
            <p>{user.firstname}</p>
          </div>
          <NavLink to="/api/edit-profile">
            <Button content="Editer le profil" className="profile-user-btn" />
          </NavLink>
        </div>
        <div className="game-session">
          <div className="profile-game">
            <h2 className="profile-game-title">
              Parties
              <NavLink to="/api/creategame">
                <Button
                  className="profile-game-btn"
                  content="Crée une partie"
                />
              </NavLink>
            </h2>
            {games && games.length > 0 ? (
              games.map((game) => (
                <div className="profile-game-edit" key={game.id}>
                  <NavLink to="/api/edit-game">
                    <button type="button" className="profile-game-edit-btn">
                      <Icon size="large" name="pencil" color="grey" />
                    </button>
                  </NavLink>
                  <button
                    type="button"
                    className="profile-game-edit-btn"
                    onClick={async () => {
                      dispatch(actionSetGameId(game.id));
                      await dispatch(actionDeleteGame());
                    }}
                  >
                    <Icon size="large" name="trash" color="red" />
                  </button>

                  <NavLink
                    to={`/api/game/${game.id}`}
                    onClick={() => {
                      dispatch(actionSetGameId(game.id));
                    }}
                  >
                    <p className="profile-game-name">{game.name}</p>
                  </NavLink>
                  <div className="profile-game-url">
                    <p className="profile-game-link">
                      http://localhost:5173/api/game/
                      {game.id}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="profile-game-edit-message">Aucune partie</p>
            )}
          </div>
          <div className="profile-session">
            <h2 className="profile-session-title">Session à venir :</h2>
            {games && games.length > 0 ? (
              games.map((game) => (
                <div key={game.id} className="profile-session-edit">
                  <div className="profile-session-edit-date">
                    <div className="profile-session-edit-date-session">
                      {game.name}: {game.event}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="profile-game-edit-message">Aucune session</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
