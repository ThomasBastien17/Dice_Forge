import { Form, FormInput, FormSelect, FormTextArea, Input } from "semantic-ui-react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './EditGame.scss';

function EditGame() {
  return (
    <div className="edit-game">
      <Header />
      <div className="edit-game-page">
        <h1 className="edit-game-title">Réglage de la partie</h1>
        <Form className="edit-game-form">
          <FormInput className="edit-game-input" label="Nom de la partie" placeholder="partie 1" icon="game"
          iconPosition="left"/>
          <FormInput className="edit-game-input" label="Date de session" placeholder="22/06/24" icon="calendar alternate" iconPosition="left"  />
          <FormTextArea className="edit-game-input" placeholder="Ajouter vos notes pour la partie" label="Notes" />
          <label>Musique
          <input className="edit-game-input" type="file"></input>
          </label>
        </Form>
      </div>
      <Footer />
    </div>
  )
}

export default EditGame;