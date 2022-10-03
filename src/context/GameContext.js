import { createContext, useContext, useState } from 'react';
import { initialCards } from '../cards-data';

export const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState(initialCards);
  const [selectedCard, setSelectedCard] = useState();

  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);

  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  const gameState = {
    playerOneHand,
    setPlayerOneHand,
    playerTwoHand,
    setPlayerTwoHand,
    playerThreeHand,
    setPlayerThreeHand,
    deck,
    setDeck,
    selectedCard,
    setSelectedCard,
    from,
    setFrom,
    to,
    setTo,
  };

  return <GameContext.Provider 
    value={gameState}>{children}</GameContext.Provider>;
  

};

const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};

export { GameProvider, useGameContext };