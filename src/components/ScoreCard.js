import React from "react";

const ScoreCard = () => {
  const [score, setScore] = React.useState(0);
  const increment = () => setScore(totalScore => totalScore + 1);

  return (
    <div>
      <h3>Score Card</h3>
      <p>Are they going to pass the mission?</p>
      <button onClick={increment} aria-label="increment score">
        YES
      </button>
      <button>NO</button>

      <p>You score is {score}</p>
    </div>
  );
};

export default ScoreCard;
