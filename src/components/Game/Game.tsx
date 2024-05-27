import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Container,
  Dropdown,
  DropdownProps,
} from 'semantic-ui-react';
import Chat from '../Chat/Chat';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Game.scss';

const diceOptions = [
  { key: 'd4', text: 'Dé de 4', value: 'd4' },
  { key: 'd6', text: 'Dé de 6', value: 'd6' },
  { key: 'd8', text: 'Dé de 8', value: 'd8' },
  { key: 'd10', text: 'Dé de 10', value: 'd10' },
  { key: 'd12', text: 'Dé de 12', value: 'd12' },
  { key: 'd20', text: 'Dé de 20', value: 'd20' },
  { key: 'd100', text: 'Dé de 100', value: 'd100' },
];

const diceMaxValue: { [key: string]: number } = {
  d4: 4,
  d6: 6,
  d8: 8,
  d10: 10,
  d12: 12,
  d20: 20,
  d100: 100,
};

const durationOptions = [
  { key: '30', text: '30 secondes', value: 30 },
  { key: '45', text: '45 secondes', value: 45 },
  { key: '60', text: '60 secondes', value: 60 },
  { key: '120', text: '120 secondes', value: 120 },
];

function Game() {
  const [timerRunning, setTimerRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(30);
  const [selectedDuration, setSelectedDuration] = useState(30);
  const [selectedDice, setSelectedDice] = useState('d6');
  const [showDiceResult, setShowDiceResult] = useState(false);
  const [diceResult, setDiceResult] = useState<number | null>(null);
  const [showCharacterSheet, setShowCharacterSheet] = useState(true);
  const [showCharacterSheetButton, setShowCharacterSheetButton] =
    useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowCharacterSheetButton(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTimer = () => {
    setTimerRunning(!timerRunning);
  };

  const resetTimer = () => {
    setTimeElapsed(selectedDuration);
  };

  useEffect(() => {
    let interval: number;
    if (timerRunning && timeElapsed > 0) {
      interval = setInterval(() => {
        setTimeElapsed((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else if (timeElapsed === 0) {
      setTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timeElapsed]);

  const formatTime = () => {
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };

  const handleDiceChange = (
    e: React.SyntheticEvent<HTMLElement>,
    { value }: DropdownProps
  ) => {
    setSelectedDice(value as string);
  };

  const handleDurationChange = (
    e: React.SyntheticEvent<HTMLElement>,
    { value }: DropdownProps
  ) => {
    setSelectedDuration(value as number);
    setTimeElapsed(value as number);
  };

  const rollDice = () => {
    const max = diceMaxValue[selectedDice];
    const result = Math.floor(Math.random() * max) + 1;
    setDiceResult(result);
  };

  const toggleCharacterSheet = () => {
    setShowCharacterSheet(!showCharacterSheet);
  };

  return (
    <div className="game-container">
      <Header />
      <Container className="main-content">
        <h1 className="create-title">Partie</h1>
        <div className="timer-section">
          <p>Temps restant: {formatTime()}</p>
          <Button onClick={toggleTimer}>
            {timerRunning ? 'Pause' : 'Start'}
          </Button>
          <Button onClick={resetTimer}>Réinitialiser</Button>
          <Dropdown
            placeholder="Sélectionner une durée"
            selection
            options={durationOptions}
            onChange={handleDurationChange}
            value={selectedDuration}
          />
        </div>
        <div className="dice-section">
          <Dropdown
            placeholder="Sélectionner un dé"
            selection
            options={diceOptions}
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
        <div className="content-section">
          <div className="left-section">
            {showCharacterSheetButton && (
              <Button onClick={toggleCharacterSheet}>Fiches</Button>
            )}
            {showCharacterSheet && (
              <div className="directory-window">
                <h2>Fiche Personnage</h2>
                {/* Implémenter ici la fiche personnage */}
              </div>
            )}
          </div>
          <div className="right-section">
            <Chat />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Game;
