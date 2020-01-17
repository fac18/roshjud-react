import React from "react";

const ScoreCard = () => {
  const [score, setScore] = React.useState("");
  const increment = () =>
    setScore(
      totalScore => totalScore + "You have successfully completed the mission"
    );
  const decrement = () =>
    setScore(totalScore => totalScore + "You have failed the mission");

  // const [result, setResult] = React.useState(null);

  const randomTrueFalse = () => {
    return Math.floor(Math.random() * (3 - 1 + 1) + 1);
  };

  const randomNumber = randomTrueFalse();

  const userTrueFalse = [];

  const mission = [
    "to row to the Galapagos from Madrid.",
    "to eat 1000 super spicy hot chicken wing in 1 min.",
    "to fly to Pluto and back in 18h."
  ];

  // onClick={increment} aria-label="increment score"

  return (
    <div>
      <h2 className="scoreCard">Score Card</h2>
      <p>
        Your mission is {mission[Math.floor(Math.random() * (3 - 1 + 1) + 0)]}
      </p>
      <p>Are you going to complete the mission?</p>
      <button
        className="yesBtn"
        aria-label="Yes btn"
        value="true"
        onClick={event => {
          event.preventDefault();
          userTrueFalse.push(1);
          console.log(userTrueFalse);
          if (randomNumber === 1) {
            increment();
          } else {
            decrement();
          }
        }}
      >
        YES
      </button>
      <button
        className="noBtn"
        aria-label="No btn"
        value="false"
        onClick={event => {
          event.preventDefault();
          userTrueFalse.push(2);
          console.log(userTrueFalse);
          if (randomNumber === 2) {
            decrement();
          } else {
            decrement();
          }
        }}
      >
        NO
      </button>

      <p className="finalResult">{score}</p>
    </div>
  );
};

export default ScoreCard;
