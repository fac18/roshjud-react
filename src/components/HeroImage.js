import React from "react";
import { getHeroData } from "../utils/getHeroData";

const HeroImage = () => {
    const [heroData, setHeroData] = React.useState(null);
    console.log("This is heroData", heroData);

    return (
        <div>
            <button onClick={event => {
                const id = Math.floor((Math.random() * (731 - 1 + 1)) + 1);
                const url = `https://akabab.github.io/superhero-api/api/id/${id}.json`;
                getHeroData(url).then(data => setHeroData(data))
            }    
            }
            >
            Get Super Buddy</button>
            {heroData? <img src={heroData.images.md} /> : null}
        </div>
    )
} 

export default HeroImage; 