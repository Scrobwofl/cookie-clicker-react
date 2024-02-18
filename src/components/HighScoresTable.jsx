// I got help from ChatGpt with this component as I was struggling with the date formatting and how to handle that alongside the ordering and loading. I had the initial skeleton but i just wanted to get this component finished.
import { useState, useEffect } from "react";
import "./HighScoresTable.css";

// Helper function to format the date and time
const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
};

export default function HighScoreTable({ finalScore }) {
  const [highScores, setHighScores] = useState([]);

  // Load high scores from local storage on component mount
  useEffect(() => {
    const scores = JSON.parse(localStorage.getItem("highScores")) || [];
    setHighScores(scores);
  }, []);

  // Update high scores with new score and save to local storage
  useEffect(() => {
    if (finalScore > 0) {
      // Use a function inside setHighScores to directly reference the current state
      setHighScores((currentHighScores) => {
        const newScore = {
          score: finalScore,
          date: formatDate(new Date()),
        };
        const updatedScores = [...currentHighScores, newScore].sort(
          (a, b) => b.score - a.score
        );
        localStorage.setItem("highScores", JSON.stringify(updatedScores));
        return updatedScores;
      });
    }
  }, [finalScore]);
  // Only depend on finalScore to trigger updates

  return (
    <div id="high-scores-table">
      <h2>High Scores</h2>
      <ul>
        {highScores.map((score, index) => (
          <li key={index}>
            <span>{score.score}</span> - {score.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
