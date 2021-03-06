import React from "react";
import { getHeroData } from "../utils/getHeroData";

const HeroImage = () => {
  const [heroData, setHeroData] = React.useState(null);
  console.log("This is heroData", heroData);

  const handleClick = (event) => {
    const id = Math.floor(Math.random() * (732 - 1 + 1) + 1);
    const url = `https://akabab.github.io/superhero-api/api/id/${id}.json`;
    getHeroData(url).then(data => setHeroData(data));
  }

  return (
    <div className="superhero">
      <button
        className="heroBtn"
        onClick={handleClick}
      >
        Reveal Super Buddy
      </button>
      {heroData ? (
        <img src={heroData.images.md} alt={"superheroes"} className="heroImg" />
      ) : null}
    </div>
  );
};

export default HeroImage;
