import "./Upgrades.css";
import data from "./data/upgradeData.json";

export default function Upgrades({
  playerScore,
  setPlayerScore,
  multiplierValue,
  setMultiplierValue,
}) {
  return (
    <div>
      <h2 id="upgrades-title">Buy An Upgrade!</h2>
      <p>(Careful.. it will cost you!)</p>
      <div id="upgrades-container">
        {data.map((upgrade) => (
          <div
            key={upgrade.id}
            className="upgrade-item"
            onClick={() => {
              console.log(`Upgrade ${upgrade.upgradeValue}`);
              setMultiplierValue(multiplierValue + upgrade.upgradeValue);
              console.log(`Old score ${playerScore}`);
              setPlayerScore(playerScore - upgrade.cost);
              console.log(`New score ${playerScore}`);
            }}
            style={{ backgroundImage: `url(${upgrade.backgroundImage})` }}
          >
            <p>{upgrade.upgradeName}</p>
            <p>Cost:{upgrade.cost}</p>
            <p>x{upgrade.upgradeValue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
