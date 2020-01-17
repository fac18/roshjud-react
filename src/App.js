import React from "react";
import "./App.css";
import UserImage from "./components/UserImage";
import HeroImage from "./components/HeroImage";
import ScoreCard from "./components/ScoreCard";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">gitMission Impossible?</h1>
      <section className="appImg">
        <article className="user">
          <UserImage />
        </article>
        <article className="hero">
          <HeroImage />
        </article>
      </section>
      <section className="scoreBoard">
        <ScoreCard />
      </section>
    </div>
  );
}
