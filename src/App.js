import React from "react";
// import "./App.css";
import UserImage from "./components/UserImage";
import HeroImage from "./components/HeroImage";
import ScoreCard from "./components/ScoreCard";

export default function App() {
  return (
    <div className="App">
      <UserImage />
      <HeroImage />
      <ScoreCard />
    </div>
  );
}
