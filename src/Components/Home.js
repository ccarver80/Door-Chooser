
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
      <h1>Progressive Mode</h1>
      <h2>Pick a difficulty:</h2>

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

      <h1>Escape Mode</h1>
      <h2>Try and escape and make it to the final door</h2>
      <button className="startButton" onClick={() => setDifficulty(10)}>Escape</button>

      <h3 className="footer">Contact me at ckc_80@outlook.com</h3>
    </div>
  );
};

export default Home;
