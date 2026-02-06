import { GameProvider, useGame } from "./GameContext"; 
import WelcomePage from "./WelcomePage";
import Scoreboard from "./ScoreBoard";
import GameBoard from "./GameBoard";


export default function App() {
  const gameData = useGame();
  const playing = gameData.playing;
  
return (
    <>
      <h1>Whack a Mole</h1>
      {playing ? (
        <>
          <Scoreboard />
          <GameBoard />
        </>
      ) : (
        <WelcomePage />
      )}
    </>
  );
}

export default function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}