import "./MainCookie.css";
export default function Cookie({
  playerScore,
  setPlayerScore,
  multiplierValue,
}) {
  const currentCookieImage = `../images/cookie.png`;

  return (
    <div id="cookie-container">
      <h2>Your score is decreasing!</h2>
      <p>Click the cookie to increase your score.</p>
      <p>Buy upgrades to increase your multiplier.</p>
      <div
        onClick={() => {
          setPlayerScore(playerScore + multiplierValue);
        }}
        id="cookie"
        style={{ backgroundImage: `url(${currentCookieImage})` }}
      ></div>
    </div>
  );
}
