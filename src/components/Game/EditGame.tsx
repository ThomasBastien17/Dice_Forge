import { Form, FormInput, FormSelect, FormTextArea, Input } from "semantic-ui-react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './EditGame.scss';
import { useState } from "react";

function EditGame() {
  const [game, setGame] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');
  const [music, setMusic] = useState('');

  return (
    <div className="edit-game">
      <Header />
      <div className="edit-game-page">
        <h1 className="edit-game-title">Réglage de la partie</h1>
        <Form className="edit-game-form">
          <FormInput className="edit-game-input" label="Nom de la partie" placeholder="partie 1" icon="game"
          iconPosition="left" value={game} onChange={(event) => {
            setGame(event.target.value);
          }}/>
          <FormInput className="edit-game-input" label="Date de session" placeholder="22/06/24" icon="calendar alternate" iconPosition="left" value={date} onChange={(event) => {
            setDate(event.target.value);
          }} />
          <FormTextArea className="edit-game-input" placeholder="Ajouter vos notes pour la partie" label="Notes" value={note} onChange={(event) => {
            setNote(event.target.value);
          }} />
          <label>Musique
          <input className="edit-game-input" type="file" value={music} onChange={(event) => {
            setMusic(event.target.value);
          }}></input>
          </label>
        </Form>
      </div>
      <Footer />
    </div>
  )
}

export default EditGame;