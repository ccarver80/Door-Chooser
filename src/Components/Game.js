import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import doorClosed from "../imgs/door-closed.png";
import doorOpen from "../imgs/door-open.png";

const Game = (props) => {
  const [progressiveScore, setProgressiveScore] = useState(0);
  const [escapeScore, setEscapeScore] = useState(10);
  const [randomNumber, setRandomNumber] = useState();
  const [isProgressiveGameMode, setProgressiveMode] = useState();

  //random number function to pick a random door
  useEffect(() => {
    if (props.diff < 10) {
      setProgressiveMode(true);
    } else {
      setProgressiveMode(false);
    }
    function getRandomDoor() {
      const randomDoor = Math.ceil(Math.random() * props.diff);
      setRandomNumber(randomDoor);
    }

    getRandomDoor();
  }, [progressiveScore, props.diff]);

  useEffect(() => {
    if(escapeScore <= 1) {
     nav('/gameWin')
    }
  }, [escapeScore])

  const doors = [];

  for (let i = 1; i <= props.diff; i++) {
    doors.push({
      src: doorClosed,
      id: i,
    });
  }
  
  const nav = useNavigate();
  function checkDoor(id) {
    if (doors.length < 10) {
      if (id === randomNumber) {
        props.getScore(progressiveScore);
        nav("/gameOver");
      } else {
        document.getElementById(id).src = doorOpen;
        setTimeout(() => {
          document.getElementById(id).src = doorClosed;
        }, 1000);
        setProgressiveScore(progressiveScore + 1);
      }
    } else {
      if (id === randomNumber) {
        props.getScore(escapeScore);
        nav("/gameOver");
      } else {
        setEscapeScore(escapeScore - 1);
        document.getElementById(id).src = doorOpen;
        setTimeout(() => {
          document.getElementById(id).src = doorClosed;
        }, 1000);
        setTimeout(() => {
          document.getElementById(id).style.display = "none";
        }, 500);
      }
    }
  }

  function resetGame() {
    props.getDifficulty(undefined);
  }

  return (
    <div>
      <div className="scoreBoard">
        {isProgressiveGameMode ? (
          <h1>Score: {progressiveScore}</h1>
        ) : (
          <h1>Round: {escapeScore}</h1>
        )}
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
