import React from "react";

const ScoreCard = () => {
  const [score, setScore] = React.useState(0);
  const increment = () =>
    setScore(
      totalScore => totalScore + 1
    );
  // const decrement = () =>
  //   setScore(totalScore => totalScore + "You have correctly predicted the outcome of your mission");

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

  return (
    <div>
      <h3>Mission</h3>
      <p>
        Your mission is {mission[Math.floor(Math.random() * (3 - 1 + 1) + 0)]}
      </p>
      <h3>Score Card</h3>
      <p>
        Do you believe you will accomplish your mission in collaboration with
        your Super Buddy?
      </p>
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
          } 
          // else {
          //   decrement();
          // }
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
            increment();
          } 
          // else {
          //   decrement();
          // }
        }}
      >
        NO
      </button>

      {/* <p className="finalResult">{score}</p> */}
      <p className="finalResult">You have correctly predicted the outcome of {score} missions!</p>
    </div>
  );
};

export default ScoreCard;
