
import React, { useEffect, useState } from "react";



const Home = (props) => {
  const [difficulty, setDifficulty] = useState();

  
  useEffect(() => {
    props.getDifficulty(difficulty);
  });

  return (
    <div className="center">
        <div className="title">
        <h1>Random Door Chooser Game</h1>
        <h2>By: Chris Carver</h2>
        </div>
      <h1>Pick a difficulty:</h1>

      <button
        className="startButton"
        onClick={() => {
          setDifficulty(6);
        }}
      >
        Easy
      </button>

      <button
        className="startButton"
        onClick={() => {
          setDifficulty(4);
        }}
      >
        Normal
      </button>

      <button
        className="startButton"
        onClick={() => {
          setDifficulty(2);
        }}
      >
        Hard
      </button>
    </div>
  );
};

export default Home;
