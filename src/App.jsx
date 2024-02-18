import "./App.css";
import { useState, useEffect } from "react";
import MainCookie from "./components/MainCookie";
import Header from "./components/Header";
import Upgrades from "./components/Upgrades";
import Score from "./components/Score";
import FinalGameScreen from "./components/FinalGameScreen";

export default function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [multiplierValue, setMultiplierValue] = useState(1);
  const [gameTimer, setGameTimer] = useState(61);
  const [finalScore, setFinalScore] = useState(0);
  const [showFinalPage, setShowFinalPage] = useState(false);

  //Game Time Calculation
  useEffect(() => {
    console.log("Game time component useCallback");
    if (gameTimer > 0) {
      const gameTimeInterval = setInterval(() => {
        setGameTimer((gameTimer) => gameTimer - 1);
        console.log(gameTimer);
      }, 1000);

      // Cleanup function to clear the interval
      return () => clearInterval(gameTimeInterval);
    } else {
      setFinalScore(playerScore);
      setShowFinalPage(true);
    }
  }, [gameTimer]);

  if (!showFinalPage) {
    return (
      <>
        <Header gameTimer={gameTimer} setGameTimer={setGameTimer} />
        <Score playerScore={playerScore} setPlayerScore={setPlayerScore} />
        <MainCookie
          playerScore={playerScore}
          setPlayerScore={setPlayerScore}
          multiplierValue={multiplierValue}
          setMultiplierValue={setMultiplierValue}
        />
        <Upgrades
          playerScore={playerScore}
          setPlayerScore={setPlayerScore}
          multiplierValue={multiplierValue}
          setMultiplierValue={setMultiplierValue}
        />
      </>
    );
  } else {
    return (
      <FinalGameScreen
        finalScore={finalScore}
        setFinalScore={setFinalScore}
        setGameTimer={setGameTimer}
        setShowFinalPage={setShowFinalPage}
        setMultiplierValue={setMultiplierValue}
        setPlayerScore={setPlayerScore}
      />
    );
  }
}
