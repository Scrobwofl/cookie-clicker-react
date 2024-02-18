import "./Score.css";
import { useEffect } from "react";

export default function Score({ playerScore, setPlayerScore }) {
  console.log("Timer component rendered");

  useEffect(() => {
    console.log("Timer component useCallback");
    const interval = setInterval(() => {
      setPlayerScore((currentCount) => currentCount - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div id="score-container">
      <h2>Player Score: {playerScore}</h2>
    </div>
  );
}
