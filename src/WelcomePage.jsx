export default function WelcomePage() {
  
  const {start, highScores} = useGame();

  return (

    <>
    <div className="welcome">
      <p>Welcome to Whack a Mole!</p>
      <p>Whack a mole to earn points.</p>
      <p>How many can you get?</p>
      <button onClick={start}>Play</button>
    </div>

    <div className="highscore">
      <h2>High Scores</h2>
      <ul>
        {highScores.length > 0
        
        }
      </ul>
    </div>
    </>
  )
}