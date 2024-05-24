import { useState, useEffect } from 'react';
import { Container, Button, Dropdown, Checkbox } from 'semantic-ui-react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Chat from '../Chat/Chat'; // Assurez-vous d'avoir le bon chemin d'importation
import './Game.scss';

function Game() {
  const [timerRunning, setTimerRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0); // Temps écoulé en secondes
  const [selectedDice, setSelectedDice] = useState('d6'); // Le dé par défaut
  const [showDiceResult, setShowDiceResult] = useState(false);
  const [diceResult, setDiceResult] = useState(null); // Résultat du dé

  // Fonction pour démarrer ou arrêter le timer
  const toggleTimer = () => {
    setTimerRunning(!timerRunning);
  };

  // Fonction pour réinitialiser le timer
  const resetTimer = () => {
    setTimeElapsed(0);
  };

  // Fonction pour mettre à jour le temps écoulé chaque seconde
  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  // Fonction pour formater le temps écoulé en format "mm:ss"
  const formatTime = () => {
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };

  // Fonction pour changer le type de dé sélectionné
  const handleDiceChange = (e, { value }) => {
    setSelectedDice(value);
  };

  // Fonction pour lancer les dés
  const rollDice = () => {
    // Simulation du lancer de dé (exemple pour un dé de 6 faces)
    const result = Math.floor(Math.random() * 6) + 1;
    setDiceResult(result);
  };

  return (
    <div className="create-game">
      <Header />
      <Container>
        <h1 className="create-title">Partie</h1>
        <div className="timer-section">
          <p>Temps écoulé: {formatTime()}</p>
          <Button onClick={toggleTimer}>
            {timerRunning ? 'Pause' : 'Start'}
          </Button>
          <Button onClick={resetTimer}>Réinitialiser</Button>
        </div>
        <div className="dice-section">
          <Dropdown
            placeholder="Sélectionner un dé"
            selection
            options={[
              { key: 'd6', text: 'Dé de 6', value: 'd6' },
              { key: 'd20', text: 'Dé de 20', value: 'd20' },
              // Autres options de dés
            ]}
            onChange={handleDiceChange}
          />
          <Button onClick={rollDice}>Lancer le dé</Button>
          <Checkbox
            label="Afficher le résultat aux autres joueurs"
            checked={showDiceResult}
            onChange={() => setShowDiceResult(!showDiceResult)}
          />
          {diceResult !== null && <p>Résultat du dé: {diceResult}</p>}
        </div>
        <div className="chat-section">
          <Chat />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Game;
