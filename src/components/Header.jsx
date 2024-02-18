import "./Header.css";
import GameTimer from "./GameTimer";

export default function Header({ gameTimer = "gameTimer" }) {
  return (
    <header>
      <h1>Cookie Clicker</h1>
      <GameTimer gameTimer={gameTimer} setGameTimer={gameTimer} />
    </header>
  );
}
