import React from "react";

const ScoreCard = () => {
  const [score, setScore] = React.useState(0);
  const increment = () => setScore(totalScore => totalScore + 1);

  // const [result, setResult] = React.useState(null);

  const randomTrueFalse = () => {
    return Math.floor(Math.random() * (3 - 1 + 1) + 1);
  };

  const randomNumber = randomTrueFalse();

  const userTrueFalse = [];

  const mission = [
    "To row to Galapagos from Madrid",
    "To Eat 1000 super spicy hot chicken wing in 1 min",
    "To fly to Pluto and back in 18h"
  ];

  // onClick={increment} aria-label="increment score"

  return (
    <div>
      <h3>Score Card</h3>
      <p>Are they going to pass the mission?</p>
      <p>
        Your mission is:{mission[Math.floor(Math.random() * (3 - 1 + 1) + 0)]}
      </p>
      <button
        value="true"
        onClick={event => {
          event.preventDefault();
          userTrueFalse.push(1);
          console.log(userTrueFalse);
          if (randomNumber === 1) {
            increment();
          }
        }}
      >
        YES
      </button>
      <button
        value="false"
        onClick={event => {
          event.preventDefault();
          userTrueFalse.push(2);
          console.log(userTrueFalse);
          if (randomNumber === 2) {
            increment();
          }

          // userTrueFalse[0] === randomTrueFalse() ? increment : null;
        }}
      >
        NO
      </button>

      <p>You have {score}</p>
    </div>
  );
};

export default ScoreCard;
