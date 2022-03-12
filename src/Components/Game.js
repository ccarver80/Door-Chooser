import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import doorClosed from "../imgs/door-closed.png";
import doorOpen from "../imgs/door-open.png";
import scary from "../imgs/scary.png";
const Game = (props) => {
  const [score, setScore] = useState(0);
  const [randomNumber, setRandomNumber] = useState();

  //random number function to pick a random door
  useEffect(() => {
    function getRandomDoor() {
      const randomDoor = Math.ceil(Math.random() * props.diff);
      setRandomNumber(randomDoor);
    }
    getRandomDoor();
  }, [score, props.diff]);

  const doors = [];

  for (let i = 1; i <= props.diff; i++) {
    doors.push({
      src: doorClosed,
      id: i,
    });
  }
  const nav = useNavigate();
  function checkDoor(id) {
    if (id === randomNumber) {
      props.getScore(score);
      nav("/gameOver");
    } else {
      document.getElementById(id).src = doorOpen;
      setTimeout(() => {
        document.getElementById(id).src = doorClosed;
      }, 1000);
      setScore(score + 1);
    }
  }

  function resetGame() {
    props.getDifficulty(undefined);
  }

  return (
    <div>
      <div className="scoreBoard">
        <h1>Score: {score}</h1>
        <h2>Pick a Door</h2>
      </div>
      <div id="doors" className="doors">
        {doors.map((door) => (
          <img
            alt="door"
            id={door.id}
            key={door.id}
            src={door.src}
            onClick={() => {
              checkDoor(door.id);
            }}
          />
        ))}
      </div>
    
      <button className="gameButtons" onClick={resetGame}>
        return
      </button>
    </div>
  );
};

export default Game;
