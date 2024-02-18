import "./GameTimer.css";

export default function GameTimer({ gameTimer }) {
  return (
    <div id="game-timer">
      <p>Game Time Remaining: {gameTimer}</p>
    </div>
  );
}
