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
    "to put out the Austrailian wild-fires.",
    "to find and resuce the girls who have gone missing from the detention camps on the Mexican-US border.",
    "to create a perpetual motion machine."
  ];

  // onClick={increment} aria-label="increment score"

  return (
    <div>
      <h3>Score Card</h3>
      <p>Do you believe you will accomplish your mission in collaboration with your Super Buddy?</p>
      <p>
        Your mission is {mission[Math.floor(Math.random() * (3 - 1 + 1) + 0)]}
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
