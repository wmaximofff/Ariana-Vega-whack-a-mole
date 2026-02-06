import {createContext, useState, useContext} from "react";

const GameContext = createContext();

export function GameProvider({children}) {

  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState(0);

  const startGame = () => {
    setPlaying(true);
    setScore(0);
  };
  const increaseScore = () => {
    setScore(score +1);
  };
   const resetGame = () =>
    setPlaying(false);
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );

  export function useGame() {
    const context = useContext(GameContext);
    if (!context) {
      throw Error("Text")
    } 
    return context;
  }