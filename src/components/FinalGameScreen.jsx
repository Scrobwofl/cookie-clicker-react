import "./FinalGameScreen.css";
import HighScoresTable from "./HighScoresTable";

export default function FinalGameScreen({
  finalScore,
  setGameTimer,
  setShowFinalPage,
  setMultiplierValue,
  setPlayerScore,
}) {
  return (
    <>
      <h1>Game Over</h1>
      <h2>Your Final Score: {finalScore}</h2>
      <button
        onClick={() => {
          console.log("Button Clicked");
          setGameTimer(5);
          setShowFinalPage(false);
          setMultiplierValue(1), setPlayerScore(1);
        }}
      >
        Play Again
      </button>
      <HighScoresTable finalScore={finalScore} />
    </>
  );
}
