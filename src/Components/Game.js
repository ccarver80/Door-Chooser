import React, { useEffect, useState } from "react";

import doorClosed from "../imgs/door-closed.png";
import doorOpen from "../imgs/door-open.png";
import scary from '../imgs/scary.png'
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

  function checkDoor(id) {
    if (id === randomNumber) {
        document.getElementById(id).src = scary
        document.getElementById('gameOver').style.display = 'block'
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
      <div className="doors">
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
        <div>
        <div id='gameOver' className="gameOver"><h1>You got caught! your score was {score} </h1></div>
          <button className="gameButtons" onClick={resetGame}>
            return
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
